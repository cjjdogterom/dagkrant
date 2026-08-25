import type { Vraag } from '../leer/QuizRunner'
import { shuffle } from '../leer/match'
import { FLORA } from '../flora/data'
import { ALLES } from '../geschiedenis/data'
import { SEINEN } from '../seinen/data'
import { ZINNEN } from '../spaans/zinnen'
import { eredivisie } from '../voetbal/data/datasets/eredivisie'
import { VOGELS } from '../vogels/data'
import { WEETJES } from '../weetjes/data'
import { LANDEN } from './landen'
import type { Editie } from './editie'

// Kies n willekeurige, unieke waarden uit pool die niet gelijk zijn aan `weg`.
function anderen(pool: string[], weg: string, n: number): string[] {
  const uniek = [...new Set(pool)].filter((x) => x && x !== weg)
  return shuffle(uniek).slice(0, n)
}

function histLabel(j: { jaar: number; label?: string }): string {
  return j.label ?? String(j.jaar)
}

const WINNAARS = eredivisie.champions.map((c) => c.winner).filter((w): w is string => !!w)

export function bouwVragen(editie: Editie): Vraag[] {
  const d = editie.datum
  const vragen: Vraag[] = []

  // ── Land → hoofdstad ──
  {
    const l = editie.land
    const opties = shuffle([l.hoofdstad, ...anderen(LANDEN.map((x) => x.hoofdstad), l.hoofdstad, 3)])
    vragen.push({
      id: `${d}:land`,
      prompt: <>Wat is de hoofdstad van <strong>{l.naam}</strong>?</>,
      options: opties,
      correct: opties.indexOf(l.hoofdstad),
      explain: `${l.hoofdstad} is de hoofdstad van ${l.naam} (${l.werelddeel}).`,
    })
  }

  // ── Eredivisie → kampioen ──
  {
    const c = editie.kampioen
    const winnaar = c.winner as string
    const opties = shuffle([winnaar, ...anderen(WINNAARS, winnaar, 3)])
    vragen.push({
      id: `${d}:eredivisie`,
      prompt: <>Wie werd eredivisiekampioen in seizoen <strong>{c.season}</strong>?</>,
      options: opties,
      correct: opties.indexOf(winnaar),
      explain: c.note ?? `${winnaar} was kampioen in ${c.season}.`,
    })
  }

  // ── Seinvlag → morse ──
  {
    const s = editie.sein
    const opties = shuffle([s.morse, ...anderen(SEINEN.map((x) => x.morse), s.morse, 3)])
    vragen.push({
      id: `${d}:sein`,
      prompt: <>Wat is de morsecode van seinvlag <strong>{s.letter}</strong> ({s.navo})?</>,
      options: opties,
      correct: opties.indexOf(s.morse),
      explain: `${s.letter} (${s.navo}) = ${s.morse}. Betekenis: ${s.betekenis}`,
    })
  }

  // ── Geschiedenis → jaar ──
  {
    const h = editie.hist
    const juist = histLabel(h)
    const opties = shuffle([juist, ...anderen(ALLES.map(histLabel), juist, 3)])
    vragen.push({
      id: `${d}:geschiedenis`,
      prompt: <>Wanneer speelde dit: <strong>{h.titel}</strong>?</>,
      options: opties,
      correct: opties.indexOf(juist),
      explain: h.uitleg,
    })
  }

  // ── Spaanse zin → Nederlandse vertaling ──
  {
    const z = editie.zin
    const opties = shuffle([z.nl, ...anderen(ZINNEN.map((x) => x.nl), z.nl, 3)])
    vragen.push({
      id: `${d}:spaans`,
      prompt: <>Wat betekent: <strong lang="es">{z.es}</strong>?</>,
      options: opties,
      correct: opties.indexOf(z.nl),
      explain: `${z.es} — ${z.nl}`,
    })
  }

  // ── Bridge → bod ──
  {
    const b = editie.bridge
    vragen.push({
      id: `${d}:bridge`,
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
    })
  }

  // ── Weetje → koppel uitleg aan vraag ──
  {
    const w = editie.weetje
    const opties = shuffle([w.vraag, ...anderen(WEETJES.map((x) => x.vraag), w.vraag, 3)])
    vragen.push({
      id: `${d}:weetje`,
      prompt: (
        <>
          Bij welke vraag hoort deze uitleg?
          <span className="kr-quiz-uitleg">{w.uitleg}</span>
        </>
      ),
      options: opties,
      correct: opties.indexOf(w.vraag),
      explain: `Categorie: ${w.categorie}.`,
    })
  }

  // ── Vogel → herken op foto ──
  {
    const v = editie.vogel
    const opties = shuffle([v.naam, ...anderen(VOGELS.map((x) => x.naam), v.naam, 3)])
    vragen.push({
      id: `${d}:vogel`,
      prompt: (
        <>
          Welke vogel is dit?
          {v.foto && <img className="kr-quiz-foto" src={`/vogels/${v.foto}`} alt="Vogel op de foto" />}
        </>
      ),
      options: opties,
      correct: opties.indexOf(v.naam),
      explain: `${v.naam} (${v.latijn}). ${v.geluid}`,
    })
  }

  // ── Flora → herken op beschrijving ──
  {
    const p = editie.plant
    const opties = shuffle([p.naam, ...anderen(FLORA.map((x) => x.naam), p.naam, 3)])
    vragen.push({
      id: `${d}:flora`,
      prompt: (
        <>
          Welke {p.type.toLowerCase()} wordt hier beschreven?
          <span className="kr-quiz-uitleg">{p.beschrijving}</span>
        </>
      ),
      options: opties,
      correct: opties.indexOf(p.naam),
      explain: `${p.naam} (${p.latijn}). ${p.kenmerk}`,
    })
  }

  return vragen
}

export function rubriekVanVraag(vraag: Vraag): string {
  return String(vraag.id ?? '').split(':')[1] ?? ''
}
