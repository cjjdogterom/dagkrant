import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { auth, db, firebaseIngesteld, googleProvider } from './firebase'

// ── Voortgangsmodel ──
export type EditieVoortgang = {
  datum: string
  perRubriek: Record<string, boolean> // rubriek-id -> laatste antwoord goed?
  afgerondOp?: string
  score?: number
  totaal?: number
}

export type VoortgangState = {
  edities: Record<string, EditieVoortgang>
}

const LEEG: VoortgangState = { edities: {} }
const SLEUTEL = 'dagkrant-voortgang-v1'

export type Gebruiker = { uid: string; naam: string | null; foto: string | null }
export type SyncStatus = 'lokaal' | 'bezig' | 'gesynct' | 'fout'

// ── Lokale opslag ──
const opslag = {
  laad(): VoortgangState {
    try {
      const raw = localStorage.getItem(SLEUTEL)
      if (!raw) return LEEG
      const parsed = JSON.parse(raw)
      return parsed && typeof parsed === 'object' && parsed.edities ? parsed : LEEG
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

function mergeState(a: VoortgangState, b: VoortgangState): VoortgangState {
  const edities = { ...a.edities }
  for (const [datum, e] of Object.entries(b.edities)) {
    const bestaand = edities[datum]
    edities[datum] = bestaand ? kiesBeste(bestaand, e) : e
  }
  return { edities }
}

// ── Context ──
type VoortgangApi = {
  state: VoortgangState
  editie: (datum: string) => EditieVoortgang | undefined
  registreer: (datum: string, rubriek: string, goed: boolean) => void
  rondAf: (datum: string, score: number, totaal: number) => void
  gedaanData: () => string[]
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

  // Altijd lokaal bewaren (cache + offline).
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
        const cloud = (snap.exists() ? (snap.data()?.state as VoortgangState | undefined) : undefined) ?? undefined
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
          // Wijziging vanaf een ander apparaat.
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
      return { edities: { ...s.edities, [datum]: { ...bestaand, perRubriek: { ...bestaand.perRubriek, [rubriek]: goed } } } }
    })
  }, [])

  const rondAf = useCallback((datum: string, score: number, totaal: number) => {
    setState((s) => {
      const bestaand = s.edities[datum] ?? { datum, perRubriek: {} }
      return { edities: { ...s.edities, [datum]: { ...bestaand, afgerondOp: new Date().toISOString(), score, totaal } } }
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
      syncBeschikbaar: firebaseIngesteld,
      gebruiker,
      syncStatus,
      inloggen,
      uitloggen,
    }),
    [state, registreer, rondAf, gebruiker, syncStatus, inloggen, uitloggen],
  )

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

export function useVoortgang(): VoortgangApi {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useVoortgang buiten VoortgangProvider')
  return ctx
}
