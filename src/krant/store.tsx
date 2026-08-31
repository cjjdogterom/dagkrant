import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { auth, db, firebaseIngesteld, googleProvider } from './firebase'

// ── Voortgangsmodel ──
export type EditieVoortgang = {
  datum: string
  perRubriek: Record<string, boolean>
  afgerondOp?: string
  score?: number
  totaal?: number
}

// Statistiek per feit (stabiel itemId), los van de datum.
export type ItemStat = {
  itemId: string
  rubriek: string
  goed: number
  fout: number
  beheerst: boolean
  laatst?: string
}

export type VoortgangState = {
  edities: Record<string, EditieVoortgang>
  items: Record<string, ItemStat>
}

const LEEG: VoortgangState = { edities: {}, items: {} }
const SLEUTEL = 'dagkrant-voortgang-v1'

function normaliseer(x: unknown): VoortgangState {
  const o = (x ?? {}) as Partial<VoortgangState>
  return { edities: o.edities ?? {}, items: o.items ?? {} }
}

export type Gebruiker = { uid: string; naam: string | null; foto: string | null }
export type SyncStatus = 'lokaal' | 'bezig' | 'gesynct' | 'fout'

// ── Lokale opslag ──
const opslag = {
  laad(): VoortgangState {
    try {
      const raw = localStorage.getItem(SLEUTEL)
      if (!raw) return LEEG
      const parsed = JSON.parse(raw)
      if (!parsed || typeof parsed !== 'object' || !parsed.edities) return LEEG
      return normaliseer(parsed)
    } catch {
      return LEEG
    }
  },
  bewaar(state: VoortgangState) {
    try {
      localStorage.setItem(SLEUTEL, JSON.stringify(state))
    } catch {
      /* negeer */
    }
  },
}

// ── Merge van lokale en cloud-voortgang (bij inloggen) ──
function kiesBeste(x: EditieVoortgang, y: EditieVoortgang): EditieVoortgang {
  const perRubriek = { ...x.perRubriek, ...y.perRubriek }
  const winnaar = y.afgerondOp && (!x.afgerondOp || y.afgerondOp > x.afgerondOp) ? y : x
  return { datum: x.datum, perRubriek, afgerondOp: winnaar.afgerondOp, score: winnaar.score, totaal: winnaar.totaal }
}

function mergeItem(x: ItemStat, y: ItemStat): ItemStat {
  const laatst = x.laatst && y.laatst ? (x.laatst > y.laatst ? x.laatst : y.laatst) : x.laatst || y.laatst
  return {
    itemId: x.itemId,
    rubriek: x.rubriek || y.rubriek,
    goed: Math.max(x.goed, y.goed),
    fout: Math.max(x.fout, y.fout),
    beheerst: x.beheerst || y.beheerst,
    laatst,
  }
}

function mergeState(a: VoortgangState, b: VoortgangState): VoortgangState {
  const edities = { ...a.edities }
  for (const [datum, e] of Object.entries(b.edities)) {
    edities[datum] = edities[datum] ? kiesBeste(edities[datum], e) : e
  }
  const items = { ...a.items }
  for (const [id, s] of Object.entries(b.items)) {
    items[id] = items[id] ? mergeItem(items[id], s) : s
  }
  return { edities, items }
}

// ── Context ──
type VoortgangApi = {
  state: VoortgangState
  editie: (datum: string) => EditieVoortgang | undefined
  registreer: (datum: string, rubriek: string, goed: boolean) => void
  rondAf: (datum: string, score: number, totaal: number) => void
  gedaanData: () => string[]
  // item-statistiek
  stat: (itemId: string) => ItemStat | undefined
  registreerItem: (itemId: string, rubriek: string, goed: boolean) => void
  markeerBeheerst: (itemId: string, rubriek: string, beheerst: boolean) => void
  beheersteItems: () => ItemStat[]
  // sync
  syncBeschikbaar: boolean
  gebruiker: Gebruiker | null
  syncStatus: SyncStatus
  inloggen: () => Promise<void>
  uitloggen: () => Promise<void>
}

const Ctx = createContext<VoortgangApi | null>(null)

export function VoortgangProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<VoortgangState>(() => (typeof window === 'undefined' ? LEEG : opslag.laad()))
  const [gebruiker, setGebruiker] = useState<Gebruiker | null>(null)
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('lokaal')
  const laatstGesynct = useRef<string>('')

  useEffect(() => {
    opslag.bewaar(state)
  }, [state])

  // Auth-status volgen.
  useEffect(() => {
    if (!firebaseIngesteld || !auth) return
    return onAuthStateChanged(auth, (u) => {
      if (u) {
        setGebruiker({ uid: u.uid, naam: u.displayName, foto: u.photoURL })
        setSyncStatus('bezig')
      } else {
        setGebruiker(null)
        setSyncStatus('lokaal')
      }
    })
  }, [])

  // Cloud-synchronisatie zolang er een gebruiker is.
  useEffect(() => {
    if (!firebaseIngesteld || !db || !gebruiker) return
    const ref = doc(db, 'gebruikers', gebruiker.uid)
    let eerste = true
    const unsub = onSnapshot(
      ref,
      (snap) => {
        const cloud = snap.exists() ? normaliseer(snap.data()?.state) : undefined
        setState((lokaal) => {
          if (eerste) {
            eerste = false
            const samen = cloud ? mergeState(lokaal, cloud) : lokaal
            const serie = JSON.stringify(samen)
            laatstGesynct.current = serie
            if (serie !== JSON.stringify(cloud)) {
              setDoc(ref, { state: samen, bijgewerkt: Date.now() }).catch(() => setSyncStatus('fout'))
            }
            return samen
          }
          if (cloud && JSON.stringify(cloud) !== JSON.stringify(lokaal)) {
            laatstGesynct.current = JSON.stringify(cloud)
            return cloud
          }
          return lokaal
        })
        setSyncStatus('gesynct')
      },
      () => setSyncStatus('fout'),
    )
    return () => unsub()
  }, [gebruiker])

  // Lokale wijzigingen naar de cloud schrijven (gedebounced).
  useEffect(() => {
    if (!firebaseIngesteld || !db || !gebruiker) return
    const serie = JSON.stringify(state)
    if (serie === laatstGesynct.current) return
    const id = setTimeout(() => {
      laatstGesynct.current = serie
      setDoc(doc(db!, 'gebruikers', gebruiker.uid), { state, bijgewerkt: Date.now() }).catch(() => setSyncStatus('fout'))
    }, 700)
    return () => clearTimeout(id)
  }, [state, gebruiker])

  const registreer = useCallback((datum: string, rubriek: string, goed: boolean) => {
    setState((s) => {
      const bestaand = s.edities[datum] ?? { datum, perRubriek: {} }
      return { ...s, edities: { ...s.edities, [datum]: { ...bestaand, perRubriek: { ...bestaand.perRubriek, [rubriek]: goed } } } }
    })
  }, [])

  const rondAf = useCallback((datum: string, score: number, totaal: number) => {
    setState((s) => {
      const bestaand = s.edities[datum] ?? { datum, perRubriek: {} }
      return { ...s, edities: { ...s.edities, [datum]: { ...bestaand, afgerondOp: new Date().toISOString(), score, totaal } } }
    })
  }, [])

  const registreerItem = useCallback((itemId: string, rubriek: string, goed: boolean) => {
    setState((s) => {
      const b = s.items[itemId] ?? { itemId, rubriek, goed: 0, fout: 0, beheerst: false }
      return {
        ...s,
        items: { ...s.items, [itemId]: { ...b, rubriek, goed: b.goed + (goed ? 1 : 0), fout: b.fout + (goed ? 0 : 1), laatst: new Date().toISOString() } },
      }
    })
  }, [])

  const markeerBeheerst = useCallback((itemId: string, rubriek: string, beheerst: boolean) => {
    setState((s) => {
      const b = s.items[itemId] ?? { itemId, rubriek, goed: 0, fout: 0, beheerst: false }
      return { ...s, items: { ...s.items, [itemId]: { ...b, rubriek, beheerst } } }
    })
  }, [])

  const inloggen = useCallback(async () => {
    if (!auth) return
    setSyncStatus('bezig')
    try {
      await signInWithPopup(auth, googleProvider)
    } catch {
      setSyncStatus('lokaal')
    }
  }, [])

  const uitloggen = useCallback(async () => {
    if (!auth) return
    await signOut(auth)
  }, [])

  const api = useMemo<VoortgangApi>(
    () => ({
      state,
      editie: (datum) => state.edities[datum],
      registreer,
      rondAf,
      gedaanData: () =>
        Object.values(state.edities)
          .filter((e) => e.afgerondOp || Object.keys(e.perRubriek).length > 0)
          .map((e) => e.datum)
          .sort((a, b) => b.localeCompare(a)),
      stat: (itemId) => state.items[itemId],
      registreerItem,
      markeerBeheerst,
      beheersteItems: () => Object.values(state.items).filter((i) => i.beheerst),
      syncBeschikbaar: firebaseIngesteld,
      gebruiker,
      syncStatus,
      inloggen,
      uitloggen,
    }),
    [state, registreer, rondAf, registreerItem, markeerBeheerst, gebruiker, syncStatus, inloggen, uitloggen],
  )

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

export function useVoortgang(): VoortgangApi {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useVoortgang buiten VoortgangProvider')
  return ctx
}
