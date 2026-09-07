import { useEffect, useState, useCallback } from 'react'
import type { AntwoordScenario } from '../bridge/antwoorden'
import SeinVlag from '../seinen/Vlag'
import { clubLogoPaths } from '../voetbal/data/clubLogos'
import type { Editie } from './editie'
import { vlagEmoji } from './landen'
import { haalArtikel, haalNieuws, type Artikel, type NieuwsItem } from './nieuws'
import { VALUTA } from './valuta'
import { haalWeer, type Weer } from './weer'
import { haalPlantFoto } from './wikifoto'
import Wereldkaart from './Wereldkaart'

// ── Nieuws & weer (live) ──
export function NieuwsWeer() {
  const [weer, setWeer] = useState<Weer | null>(null)
  const [nieuws, setNieuws] = useState<NieuwsItem[] | null>(null)
  const [bezig, setBezig] = useState(true)
  const [open, setOpen] = useState<NieuwsItem | null>(null)
  const [artikel, setArtikel] = useState<Artikel | null>(null)
  const [laadArtikel, setLaadArtikel] = useState(false)

  useEffect(() => {
    let leeft = true
    Promise.all([haalWeer(), haalNieuws()]).then(([w, n]) => {
      if (!leeft) return
      setWeer(w)
      setNieuws(n)
      setBezig(false)
    })
    return () => {
      leeft = false
    }
  }, [])

  function openArtikel(item: NieuwsItem) {
    setOpen(item)
    setArtikel(null)
    setLaadArtikel(true)
    haalArtikel(item.link).then((a) => {
      setArtikel(a)
      setLaadArtikel(false)
    })
  }

  const leeg = !artikel || (artikel.alineas.length === 0 && !artikel.samenvatting)

  return (
    <div className="kr-nieuwsweer">
      <div className="kr-weer">
        {weer ? (
          <>
            <span className="kr-weer-temp">{weer.temp}°</span>
            <span className="kr-weer-meta">
              {weer.omschrijving}
              <br />
              {weer.plaats} · wind {weer.wind} km/u
            </span>
          </>
        ) : (
          <span className="kr-weer-meta">{bezig ? 'Weer laden…' : 'Weer niet beschikbaar'}</span>
        )}
      </div>

      <div className="kr-nieuws">
        <h3>Nieuws van nu</h3>
        {nieuws && nieuws.length > 0 ? (
          <ul className="kr-koppen">
            {nieuws.map((n) => (
              <li key={n.link}>
                <button type="button" className="kr-kop" onClick={() => openArtikel(n)}>{n.titel}</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="kr-nieuws-leeg">
            {bezig ? 'Koppen laden…' : (
              <>Live nieuws verschijnt op de gepubliceerde site. Kijk anders op <a href="https://nos.nl" target="_blank" rel="noopener noreferrer">nos.nl</a>.</>
            )}
          </p>
        )}
      </div>

      {open && (
        <div className="kr-lezer-overlay" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <article className="kr-lezer" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="kr-lezer-sluit" onClick={() => setOpen(null)} aria-label="Sluiten">×</button>
            <p className="kr-lezer-label">Nieuws · NOS</p>
            <h2>{(artikel && artikel.titel) || open.titel}</h2>
            {laadArtikel && <p className="kr-soft">Artikel laden…</p>}
            {!laadArtikel && !leeg && artikel && (
              <div className="kr-lezer-body">
                {artikel.samenvatting && <p className="kr-lezer-intro">{artikel.samenvatting}</p>}
                {artikel.alineas.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            )}
            {!laadArtikel && leeg && (
              <p className="kr-soft">Het volledige artikel kon niet worden geladen (werkt alleen op de gepubliceerde site).</p>
            )}
            <a className="kr-lezer-bron" href={open.link} target="_blank" rel="noopener noreferrer">Lees op nos.nl →</a>
          </article>
        </div>
      )}
    </div>
  )
}

// ── Land van de dag ──
export function LandSectie({ land }: { land: Editie['land'] }) {
  const v = VALUTA[land.iso2]
  const munt = v ? `${v.naam}${v.symbool ? ` (${v.symbool})` : ''}` : '—'
  return (
    <div className="kr-land">
      <div className="kr-land-kop">
        <span className="kr-vlag">{vlagEmoji(land.iso2)}</span>
        <div>
          <h3>{land.naam}</h3>
          <dl className="kr-land-feiten">
            <dt>Hoofdstad</dt><dd>{land.hoofdstad}</dd>
            <dt>Werelddeel</dt><dd>{land.werelddeel}</dd>
            <dt>Munteenheid</dt><dd>{munt}</dd>
          </dl>
        </div>
      </div>
      <Wereldkaart lat={land.lat} lon={land.lon} />
    </div>
  )
}

// ── Eredivisie ──
export function EredivisieSectie({ kampioen }: { kampioen: Editie['kampioen'] }) {
  const logo = kampioen.winner ? clubLogoPaths[kampioen.winner] : undefined
  return (
    <div className="kr-eredivisie">
      {logo && <img className="kr-club-logo" src={logo} alt={kampioen.winner ?? ''} />}
      <div>
        <p className="kr-seizoen">Seizoen {kampioen.season}</p>
        <h3>{kampioen.winner}</h3>
        {kampioen.location && <p className="kr-soft">{kampioen.location}</p>}
        {kampioen.note && <p className="kr-note">{kampioen.note}</p>}
      </div>
    </div>
  )
}

// ── Seinvlag & morse ──
export function SeinSectie({ sein }: { sein: Editie['sein'] }) {
  return (
    <div className="kr-sein">
      <SeinVlag letter={sein.letter} size={92} />
      <div>
        <h3>{sein.letter} — {sein.navo}</h3>
        <p className="kr-morse">{sein.morse}</p>
        <p className="kr-soft">{sein.betekenis}</p>
      </div>
    </div>
  )
}

// ── Vaderlandse geschiedenis ──
export function GeschiedenisSectie({ hist }: { hist: Editie['hist'] }) {
  return (
    <div className="kr-hist">
      <p className="kr-jaar">{hist.label ?? hist.jaar}</p>
      <h3>{hist.titel}</h3>
      <p>{hist.uitleg}</p>
      <p className="kr-soft kr-klein">{hist.periode}</p>
    </div>
  )
}

// ── Spaanse zin ──
export function SpaansSectie({ zin }: { zin: Editie['zin'] }) {
  return (
    <div className="kr-spaans">
      <p className="kr-es" lang="es">{zin.es}</p>
      <p className="kr-nl">{zin.nl}</p>
      <p className="kr-soft kr-klein">Thema: {zin.thema}</p>
    </div>
  )
}

// Plantfoto van Wikipedia, met emoji als terugval tijdens laden / bij geen foto.
function FloraFoto({ latijn, naam, emoji }: { latijn: string; naam: string; emoji: string }) {
  const [foto, setFoto] = useState<string | null>(null)
  useEffect(() => {
    let leeft = true
    setFoto(null)
    haalPlantFoto(latijn, naam).then((u) => { if (leeft) setFoto(u) })
    return () => { leeft = false }
  }, [latijn, naam])
  if (foto) return <img className="kr-flora-foto" src={foto} alt={naam} loading="lazy" />
  return <span className="kr-flora-emoji" aria-hidden="true">{emoji}</span>
}

// ── Flora van de dag ──
export function FloraSectie({ plant }: { plant: Editie['plant'] }) {
  return (
    <div className="kr-flora">
      <FloraFoto latijn={plant.latijn} naam={plant.naam} emoji={plant.emoji} />
      <div className="kr-flora-info">
        <h3>{plant.naam} <span className="kr-latijn">{plant.latijn}</span></h3>
        <p className="kr-soft kr-klein">{plant.type}{plant.bloei && plant.bloei !== '—' ? ` · bloei: ${plant.bloei}` : ''}</p>
        <p>{plant.beschrijving}</p>
        <p className="kr-soft"><strong>Bijzonder:</strong> {plant.kenmerk}</p>
      </div>
    </div>
  )
}

// ── Bridge ──
const NIVEAUS = [1, 2, 3, 4, 5, 6, 7] as const
const KLEUREN = [
  { sym: '♣', css: '' },
  { sym: '♦', css: 'kr-rood' },
  { sym: '♥', css: 'kr-rood' },
  { sym: '♠', css: '' },
  { sym: 'SA', css: 'kr-sa' },
] as const

function BiedBox({ onBied, uitgeschakeld }: { onBied: (bod: string) => void; uitgeschakeld: boolean }) {
  return (
    <div className="kr-biedbox">
      <div className="kr-biedbox-grid">
        {NIVEAUS.map((n) =>
          KLEUREN.map((k) => {
            const bod = `${n}${k.sym}`
            return (
              <button
                key={bod}
                type="button"
                className={`kr-bod ${k.css}`}
                disabled={uitgeschakeld}
                onClick={() => onBied(bod)}
              >
                {n}<span className={k.css}>{k.sym}</span>
              </button>
            )
          }),
        )}
      </div>
      <div className="kr-biedbox-extra">
        <button type="button" className="kr-bod kr-bod-pas" disabled={uitgeschakeld} onClick={() => onBied('pas')}>Pas</button>
        <button type="button" className="kr-bod kr-bod-dbl" disabled={uitgeschakeld} onClick={() => onBied('doubleer')}>Doubleer</button>
      </div>
    </div>
  )
}

function BridgeKaarten({ hand }: { hand: [string, string, string, string] }) {
  return (
    <div className="kr-hand">
      <div className="kr-hand-rij">
        <span className="kr-suit">♠</span>
        <span className="kr-kaarten">{hand[0]}</span>
      </div>
      <div className="kr-hand-rij kr-rood">
        <span className="kr-suit">♥</span>
        <span className="kr-kaarten">{hand[1]}</span>
      </div>
      <div className="kr-hand-rij kr-rood">
        <span className="kr-suit">♦</span>
        <span className="kr-kaarten">{hand[2]}</span>
      </div>
      <div className="kr-hand-rij">
        <span className="kr-suit">♣</span>
        <span className="kr-kaarten">{hand[3]}</span>
      </div>
    </div>
  )
}

function BridgeRonde({ scenario, nummer }: { scenario: AntwoordScenario; nummer: number }) {
  const [gekozen, setGekozen] = useState<string | null>(null)
  const juist = scenario.opties[scenario.goed]
  const isGoed = gekozen === juist

  const bied = useCallback((bod: string) => {
    if (gekozen) return
    setGekozen(bod)
  }, [gekozen])

  return (
    <div className={`kr-bridge-ronde${gekozen ? (isGoed ? ' goed' : ' fout') : ''}`}>
      <div className="kr-bridge-ronde-kop">
        <span className="kr-bridge-nr">Ronde {nummer}</span>
        <span className="kr-bridge-opening">Partner opent <strong>{scenario.opening}</strong></span>
        <span className="kr-bridge-hcp">{scenario.hcp} HCP</span>
      </div>

      <div className="kr-bridge-inhoud">
        <BridgeKaarten hand={scenario.hand} />

        {!gekozen ? (
          <div className="kr-bridge-bied">
            <p className="kr-bridge-vraag">Wat bied jij?</p>
            <BiedBox onBied={bied} uitgeschakeld={false} />
          </div>
        ) : (
          <div className="kr-bridge-resultaat">
            <div className={`kr-bridge-feedback ${isGoed ? 'goed' : 'fout'}`}>
              {isGoed ? (
                <p className="kr-bridge-verdict">Goed! <strong>{juist}</strong> is het juiste bod.</p>
              ) : (
                <p className="kr-bridge-verdict">
                  Jij bood <strong>{gekozen}</strong> — het juiste bod is <strong>{juist}</strong>.
                </p>
              )}
              <p className="kr-bridge-uitleg">{scenario.uitleg}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function BridgeSectie({ bridge }: { bridge: Editie['bridge'] }) {
  return (
    <div className="kr-bridge">
      <p className="kr-bridge-intro">Drie biedrondes — bekijk je hand, tel je punten en kies het juiste bod.</p>
      {bridge.map((scenario, i) => (
        <BridgeRonde key={i} scenario={scenario} nummer={i + 1} />
      ))}
    </div>
  )
}

// ── Weetje ──
export function WeetjeSectie({ weetje }: { weetje: Editie['weetje'] }) {
  return (
    <div className="kr-weetje">
      <p className="kr-soft kr-klein">{weetje.categorie}</p>
      <h3>{weetje.vraag}</h3>
      <p>{weetje.uitleg}</p>
    </div>
  )
}

// ── Vogel ──
export function VogelSectie({ vogel }: { vogel: Editie['vogel'] }) {
  return (
    <div className="kr-vogel">
      {vogel.foto && <img className="kr-vogel-foto" src={`/vogels/${vogel.foto}`} alt={vogel.naam} />}
      <div className="kr-vogel-info">
        <h3>{vogel.naam} <span className="kr-latijn">{vogel.latijn}</span></h3>
        <p>{vogel.uiterlijk}</p>
        <p className="kr-soft"><strong>Geluid:</strong> {vogel.geluid}</p>
        {vogel.geluidUrl && (
          <audio className="kr-audio" controls preload="none" src={vogel.geluidUrl}>
            Je browser speelt geen audio af.
          </audio>
        )}
      </div>
    </div>
  )
}
