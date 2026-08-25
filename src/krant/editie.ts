import { ANTWOORD_SCENARIOS, type AntwoordScenario } from '../bridge/antwoorden'
import { ALLES, type HistItem } from '../geschiedenis/data'
import { SEINEN, type Sein } from '../seinen/data'
import { ALLE_WOORDEN, type Woord } from '../spaans/woorden'
import { eredivisie } from '../voetbal/data/datasets/eredivisie'
import type { Champion } from '../voetbal/types'
import { VOGELS, type Vogel } from '../vogels/data'
import { WEETJES, type Weetje } from '../weetjes/data'
import { LANDEN, type Land } from './landen'
import { kiesVoor } from './rng'

// Alleen seizoenen met een echte kampioen.
const KAMPIOENEN: Champion[] = eredivisie.champions.filter((c) => c.winner)

export type SpaansWoord = Woord & { thema: string }

export type Editie = {
  datum: string
  land: Land
  kampioen: Champion
  sein: Sein
  hist: HistItem
  woord: SpaansWoord
  bridge: AntwoordScenario
  weetje: Weetje
  vogel: Vogel
}

export function bouwEditie(datum: string): Editie {
  return {
    datum,
    land: kiesVoor(datum, 'land', LANDEN),
    kampioen: kiesVoor(datum, 'eredivisie', KAMPIOENEN),
    sein: kiesVoor(datum, 'sein', SEINEN),
    hist: kiesVoor(datum, 'geschiedenis', ALLES),
    woord: kiesVoor(datum, 'spaans', ALLE_WOORDEN),
    bridge: kiesVoor(datum, 'bridge', ANTWOORD_SCENARIOS),
    weetje: kiesVoor(datum, 'weetje', WEETJES),
    vogel: kiesVoor(datum, 'vogel', VOGELS),
  }
}

// Rubrieken met een oefening (nieuws/weer hebben er geen).
export const RUBRIEKEN = [
  { id: 'land', label: 'Land van de dag' },
  { id: 'eredivisie', label: 'Eredivisie' },
  { id: 'sein', label: 'Seinvlag & morse' },
  { id: 'geschiedenis', label: 'Vaderlandse geschiedenis' },
  { id: 'spaans', label: 'Spaans' },
  { id: 'bridge', label: 'Bridge' },
  { id: 'weetje', label: 'Weetje' },
  { id: 'vogel', label: 'Vogel' },
] as const
