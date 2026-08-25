import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

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

// ── Opslaglaag (nu localStorage; later vervangbaar door Firebase-sync) ──
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
      /* opslag vol of geblokkeerd — negeer */
    }
  },
}

// ── Context ──
type VoortgangApi = {
  state: VoortgangState
  editie: (datum: string) => EditieVoortgang | undefined
  registreer: (datum: string, rubriek: string, goed: boolean) => void
  rondAf: (datum: string, score: number, totaal: number) => void
  gedaanData: () => string[]
}

const Ctx = createContext<VoortgangApi | null>(null)

export function VoortgangProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<VoortgangState>(() => (typeof window === 'undefined' ? LEEG : opslag.laad()))

  useEffect(() => {
    opslag.bewaar(state)
  }, [state])

  const registreer = useCallback((datum: string, rubriek: string, goed: boolean) => {
    setState((s) => {
      const bestaand = s.edities[datum] ?? { datum, perRubriek: {} }
      return {
        edities: {
          ...s.edities,
          [datum]: { ...bestaand, perRubriek: { ...bestaand.perRubriek, [rubriek]: goed } },
        },
      }
    })
  }, [])

  const rondAf = useCallback((datum: string, score: number, totaal: number) => {
    setState((s) => {
      const bestaand = s.edities[datum] ?? { datum, perRubriek: {} }
      return {
        edities: {
          ...s.edities,
          [datum]: { ...bestaand, afgerondOp: new Date().toISOString(), score, totaal },
        },
      }
    })
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
    }),
    [state, registreer, rondAf],
  )

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

export function useVoortgang(): VoortgangApi {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useVoortgang buiten VoortgangProvider')
  return ctx
}
