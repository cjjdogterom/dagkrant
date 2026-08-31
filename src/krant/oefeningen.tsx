import type { Vraag } from '../leer/QuizRunner'
import { shuffle } from '../leer/match'
import { ANTWOORD_SCENARIOS } from '../bridge/antwoorden'
import { FLORA } from '../flora/data'
import { ALLES } from '../geschiedenis/data'
import { SEINEN } from '../seinen/data'
import { ZINNEN } from '../spaans/zinnen'
import { eredivisie } from '../voetbal/data/datasets/eredivisie'
import { VOGELS } from '../vogels/data'
import { WEETJES } from '../weetjes/data'
import { itemIdVoor, RUBRIEKEN, type Editie } from './editie'
import { LANDEN } from './landen'

// Kies n willekeurige, unieke waarden uit pool die niet gelijk zijn aan `weg`.
function anderen(pool: string[], weg: string, n: number): string[] {
  const uniek = [...new Set(pool)].filter((x) => x && x !== weg)
  return shuffle(uniek).slice(0, n)
}

function histLabel(j: { jaar: number; label?: string }): string {
  return j.label ?? String(j.jaar)
}

const WINNAARS = eredivisie.champions.map((c) => c.winner).filter((w): w is string => !!w)

// ── Per-rubriek vraagbouwers (op basis van het concrete item, zonder id) ──
function vraagLand(l: (typeof LANDEN)[number]): Vraag {
  const opties = shuffle([l.hoofdstad, ...anderen(LANDEN.map((x) => x.hoofdstad), l.hoofdstad, 3)])
  return { prompt: <>Wat is de hoofdstad van <strong>{l.naam}</strong>?</>, options: opties, correct: opties.indexOf(l.hoofdstad), explain: `${l.hoofdstad} is de hoofdstad van ${l.naam} (${l.werelddeel}).` }
}

function vraagEre(c: { season: string; winner: string | null; note?: string }): Vraag {
  const winnaar = c.winner as string
  const opties = shuffle([winnaar, ...anderen(WINNAARS, winnaar, 3)])
  return { prompt: <>Wie werd eredivisiekampioen in seizoen <strong>{c.season}</strong>?</>, options: opties, correct: opties.indexOf(winnaar), explain: c.note ?? `${winnaar} was kampioen in ${c.season}.` }
}

function vraagSein(s: (typeof SEINEN)[number]): Vraag {
  const opties = shuffle([s.morse, ...anderen(SEINEN.map((x) => x.morse), s.morse, 3)])
  return { prompt: <>Wat is de morsecode van seinvlag <strong>{s.letter}</strong> ({s.navo})?</>, options: opties, correct: opties.indexOf(s.morse), explain: `${s.letter} (${s.navo}) = ${s.morse}. Betekenis: ${s.betekenis}` }
}

function vraagHist(h: (typeof ALLES)[number]): Vraag {
  const juist = histLabel(h)
  const opties = shuffle([juist, ...anderen(ALLES.map(histLabel), juist, 3)])
  return { prompt: <>Wanneer speelde dit: <strong>{h.titel}</strong>?</>, options: opties, correct: opties.indexOf(juist), explain: h.uitleg }
}

function vraagSpaans(z: (typeof ZINNEN)[number]): Vraag {
  const opties = shuffle([z.nl, ...anderen(ZINNEN.map((x) => x.nl), z.nl, 3)])
  return { prompt: <>Wat betekent: <strong lang="es">{z.es}</strong>?</>, options: opties, correct: opties.indexOf(z.nl), explain: `${z.es} — ${z.nl}` }
}

function vraagBridge(b: (typeof ANTWOORD_SCENARIOS)[number]): Vraag {
  return {
    prompt: (
      <>
        Je partner opent <strong>{b.opening}</strong>. Jij hebt {b.hcp} punten:
        <span className="kr-bridge-hand">
          <span>♠ {b.hand[0]}</span>
          <span className="kr-rood">♥ {b.hand[1]}</span>
          <span className="kr-rood">♦ {b.hand[2]}</span>
          <span>♣ {b.hand[3]}</span>
        </span>
        Wat bied jij?
      </>
    ),
    options: b.opties,
    correct: b.goed,
    explain: b.uitleg,
  }
}

function vraagWeetje(w: (typeof WEETJES)[number]): Vraag {
  const opties = shuffle([w.vraag, ...anderen(WEETJES.map((x) => x.vraag), w.vraag, 3)])
  return { prompt: (<>Bij welke vraag hoort deze uitleg?<span className="kr-quiz-uitleg">{w.uitleg}</span></>), options: opties, correct: opties.indexOf(w.vraag), explain: `Categorie: ${w.categorie}.` }
}

function vraagVogel(v: (typeof VOGELS)[number]): Vraag {
  const opties = shuffle([v.naam, ...anderen(VOGELS.map((x) => x.naam), v.naam, 3)])
  return { prompt: (<>Welke vogel is dit?{v.foto && <img className="kr-quiz-foto" src={`/vogels/${v.foto}`} alt="Vogel op de foto" />}</>), options: opties, correct: opties.indexOf(v.naam), explain: `${v.naam} (${v.latijn}). ${v.geluid}` }
}

function vraagFlora(p: (typeof FLORA)[number]): Vraag {
  const opties = shuffle([p.naam, ...anderen(FLORA.map((x) => x.naam), p.naam, 3)])
  return { prompt: (<>Welke {p.type.toLowerCase()} wordt hier beschreven?<span className="kr-quiz-uitleg">{p.beschrijving}</span></>), options: opties, correct: opties.indexOf(p.naam), explain: `${p.naam} (${p.latijn}). ${p.kenmerk}` }
}

// Bouw de vraag voor een rubriek + item.
function vraagVoor(rubriek: string, item: unknown): Vraag | null {
  switch (rubriek) {
    case 'land': return vraagLand(item as never)
    case 'eredivisie': return vraagEre(item as never)
    case 'sein': return vraagSein(item as never)
    case 'geschiedenis': return vraagHist(item as never)
    case 'spaans': return vraagSpaans(item as never)
    case 'bridge': return vraagBridge(item as never)
    case 'weetje': return vraagWeetje(item as never)
    case 'vogel': return vraagVogel(item as never)
    case 'flora': return vraagFlora(item as never)
    default: return null
  }
}

function itemVanEditie(e: Editie, rubriek: string): unknown {
  switch (rubriek) {
    case 'land': return e.land
    case 'eredivisie': return e.kampioen
    case 'sein': return e.sein
    case 'geschiedenis': return e.hist
    case 'spaans': return e.zin
    case 'bridge': return e.bridge
    case 'weetje': return e.weetje
    case 'vogel': return e.vogel
    case 'flora': return e.plant
    default: return null
  }
}

// Zoek het concrete item bij een stabiel itemId.
export function zoekItem(itemId: string): { rubriek: string; item: unknown } | null {
  const i = itemId.indexOf(':')
  if (i < 0) return null
  const rubriek = itemId.slice(0, i)
  const key = itemId.slice(i + 1)
  const n = Number(key)
  let item: unknown = null
  switch (rubriek) {
    case 'land': item = LANDEN.find((x) => x.iso2 === key); break
    case 'eredivisie': item = eredivisie.champions.find((x) => x.season === key && x.winner); break
    case 'sein': item = SEINEN.find((x) => x.letter === key); break
    case 'geschiedenis': item = ALLES[n]; break
    case 'spaans': item = ZINNEN[n]; break
    case 'bridge': item = ANTWOORD_SCENARIOS[n]; break
    case 'weetje': item = WEETJES.find((x) => String(x.id) === key); break
    case 'vogel': item = VOGELS.find((x) => x.id === key); break
    case 'flora': item = FLORA[n]; break
    default: return null
  }
  return item ? { rubriek, item } : null
}

// Korte, leesbare omschrijving van een item (voor het overzicht).
export function itemLabel(itemId: string): string {
  const g = zoekItem(itemId)
  if (!g) return itemId
  const it = g.item as Record<string, unknown>
  switch (g.rubriek) {
    case 'land': return `${it.naam} — hoofdstad`
    case 'eredivisie': return `Kampioen ${it.season}`
    case 'sein': return `Sein ${it.letter} (${it.navo})`
    case 'geschiedenis': return String(it.titel)
    case 'spaans': return String(it.es)
    case 'bridge': return `Bridge — opening ${it.opening}`
    case 'weetje': return String(it.vraag)
    case 'vogel': return `Vogel — ${it.naam}`
    case 'flora': return `Flora — ${it.naam}`
    default: return itemId
  }
}

// ── Vragenlijsten ──
// Vandaag: één vraag per rubriek. id = v|datum|rubriek|itemId
export function bouwVragen(editie: Editie): Vraag[] {
  const out: Vraag[] = []
  for (const r of RUBRIEKEN) {
    const v = vraagVoor(r.id, itemVanEditie(editie, r.id))
    if (v) {
      v.id = `v|${editie.datum}|${r.id}|${itemIdVoor(r.id, editie)}`
      out.push(v)
    }
  }
  return out
}

// Herhaling: reconstrueer vragen uit stabiele itemIds. id = h|itemId
export function bouwHerhaalVragen(itemIds: string[]): Vraag[] {
  const out: Vraag[] = []
  for (const id of itemIds) {
    const g = zoekItem(id)
    if (!g) continue
    const v = vraagVoor(g.rubriek, g.item)
    if (v) {
      v.id = `h|${id}`
      out.push(v)
    }
  }
  return out
}

export type VraagInfo = { soort: 'vandaag' | 'herhaal'; rubriek: string; itemId: string; datum?: string }

export function ontleedVraag(vraag: Vraag): VraagInfo | null {
  const id = String(vraag.id ?? '')
  const p = id.split('|')
  if (p[0] === 'v' && p.length >= 4) return { soort: 'vandaag', datum: p[1], rubriek: p[2], itemId: p[3] }
  if (p[0] === 'h' && p.length >= 2) {
    const itemId = p[1]
    return { soort: 'herhaal', rubriek: itemId.slice(0, itemId.indexOf(':')), itemId }
  }
  return null
}
