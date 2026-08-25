import { useEffect, useState } from 'react'
import SeinVlag from '../seinen/Vlag'
import { clubLogoPaths } from '../voetbal/data/clubLogos'
import type { Editie } from './editie'
import { vlagEmoji } from './landen'
import { haalNieuws, type NieuwsItem } from './nieuws'
import { haalWeer, type Weer } from './weer'
import Wereldkaart from './Wereldkaart'

// ── Nieuws & weer (live) ──
export function NieuwsWeer() {
  const [weer, setWeer] = useState<Weer | null>(null)
  const [nieuws, setNieuws] = useState<NieuwsItem[] | null>(null)
  const [bezig, setBezig] = useState(true)

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

  return (
    <div className="kr-nieuwsweer">
      <div className="kr-weer">
        {weer ? (
          <>
            <span className="kr-weer-emoji">{weer.emoji}</span>
            <span className="kr-weer-temp">{weer.temp}°</span>
            <span className="kr-weer-meta">
              {weer.omschrijving} · {weer.plaats}
              <br />
              wind {weer.wind} km/u
            </span>
          </>
        ) : (
          <span className="kr-weer-meta">{bezig ? 'Weer laden…' : 'Weer niet beschikbaar'}</span>
        )}
      </div>

      <div className="kr-nieuws">
        <h3>Nieuws van nu</h3>
        {nieuws && nieuws.length > 0 ? (
          <ul>
            {nieuws.map((n) => (
              <li key={n.link}>
                <a href={n.link} target="_blank" rel="noopener noreferrer">{n.titel}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="kr-nieuws-leeg">
            {bezig ? 'Koppen laden…' : (
              <>Live koppen verschijnen op de gepubliceerde site. Kijk anders op <a href="https://nos.nl" target="_blank" rel="noopener noreferrer">nos.nl</a>.</>
            )}
          </p>
        )}
      </div>
    </div>
  )
}

// ── Land van de dag ──
export function LandSectie({ land }: { land: Editie['land'] }) {
  return (
    <div className="kr-land">
      <div className="kr-land-kop">
        <span className="kr-vlag">{vlagEmoji(land.iso2)}</span>
        <div>
          <h3>{land.naam}</h3>
          <p>Hoofdstad: <strong>{land.hoofdstad}</strong> · {land.werelddeel}</p>
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

// ── Spaans ──
export function SpaansSectie({ woord }: { woord: Editie['woord'] }) {
  return (
    <div className="kr-spaans">
      <p className="kr-es">{woord.es}</p>
      <p className="kr-nl">{woord.nl}</p>
      <p className="kr-soft kr-klein">Thema: {woord.thema}</p>
    </div>
  )
}

// ── Bridge ──
export function BridgeSectie({ bridge }: { bridge: Editie['bridge'] }) {
  const juist = bridge.opties[bridge.goed]
  return (
    <div className="kr-bridge">
      <p className="kr-soft">Partner opent <strong>{bridge.opening}</strong> — jij hebt {bridge.hcp} punten:</p>
      <div className="kr-bridge-hand">
        <span>♠ {bridge.hand[0]}</span>
        <span className="kr-rood">♥ {bridge.hand[1]}</span>
        <span className="kr-rood">♦ {bridge.hand[2]}</span>
        <span>♣ {bridge.hand[3]}</span>
      </div>
      <p className="kr-bridge-antwoord">Bod: <strong>{juist}</strong></p>
      <p className="kr-soft kr-klein">{bridge.uitleg}</p>
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
