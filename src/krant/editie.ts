import { ANTWOORD_SCENARIOS, type AntwoordScenario } from '../bridge/antwoorden'
import { FLORA, type Plant } from '../flora/data'
import { ALLES, type HistItem } from '../geschiedenis/data'
import { SEINEN, type Sein } from '../seinen/data'
import { ZINNEN, type Zin } from '../spaans/zinnen'
import { eredivisie } from '../voetbal/data/datasets/eredivisie'
import type { Champion } from '../voetbal/types'
import { VOGELS, type Vogel } from '../vogels/data'
import { WEETJES, type Weetje } from '../weetjes/data'
import { LANDEN, type Land } from './landen'
import { kiesVoor } from './rng'

// Alleen seizoenen met een echte kampioen.
const KAMPIOENEN: Champion[] = eredivisie.champions.filter((c) => c.winner)

export type Editie = {
  datum: string
  land: Land
  kampioen: Champion
  sein: Sein
  hist: HistItem
  zin: Zin
  bridge: AntwoordScenario
  weetje: Weetje
  vogel: Vogel
  plant: Plant
}

export function bouwEditie(datum: string): Editie {
  return {
    datum,
    land: kiesVoor(datum, 'land', LANDEN),
    kampioen: kiesVoor(datum, 'eredivisie', KAMPIOENEN),
    sein: kiesVoor(datum, 'sein', SEINEN),
    hist: kiesVoor(datum, 'geschiedenis', ALLES),
    zin: kiesVoor(datum, 'spaans', ZINNEN),
    bridge: kiesVoor(datum, 'bridge', ANTWOORD_SCENARIOS),
    weetje: kiesVoor(datum, 'weetje', WEETJES),
    vogel: kiesVoor(datum, 'vogel', VOGELS),
    plant: kiesVoor(datum, 'flora', FLORA),
  }
}

// Rubrieken met een oefening (nieuws/weer hebben er geen).
export const RUBRIEKEN = [
  { id: 'land', label: 'Land van de dag' },
  { id: 'eredivisie', label: 'Eredivisie' },
  { id: 'sein', label: 'Seinvlag & morse' },
  { id: 'geschiedenis', label: 'Vaderlandse geschiedenis' },
  { id: 'spaans', label: 'Spaanse zin' },
  { id: 'bridge', label: 'Bridge' },
  { id: 'weetje', label: 'Weetje' },
  { id: 'vogel', label: 'Vogel' },
  { id: 'flora', label: 'Flora' },
] as const
