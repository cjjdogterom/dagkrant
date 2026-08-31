import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import QuizRunner, { type Vraag } from '../leer/QuizRunner'
import { bouwEditie, itemIdVoor, RUBRIEKEN, RUBRIEK_LABEL } from './editie'
import { bouwHerhaalVragen, bouwVragen, itemLabel, ontleedVraag } from './oefeningen'
import { datumSleutel, parseDatum } from './rng'
import {
  BridgeSectie, EredivisieSectie, FloraSectie, GeschiedenisSectie, LandSectie,
  NieuwsWeer, SeinSectie, SpaansSectie, VogelSectie, WeetjeSectie,
} from './secties'
import { useVoortgang } from './store'
import './krant.css'

function langeDatum(sleutel: string): string {
  return parseDatum(sleutel).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}
function korteDatum(sleutel: string): string {
  return parseDatum(sleutel).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' })
}

// Rubriekkaart met kop, optioneel beheersing-vinkje, en inhoud.
function RubriekKaart({ rubriek, itemId, label, breed, toonBeheersing, children }: {
  rubriek: string; itemId: string; label: string; breed?: boolean; toonBeheersing: boolean; children: ReactNode
}) {
  const { stat, markeerBeheerst } = useVoortgang()
  const beheerst = !!stat(itemId)?.beheerst
  return (
    <section className={`kr-rubriek${breed ? ' kr-breed' : ''}`}>
      <div className="kr-rubriek-kop">
        <span className="kr-label">{label}</span>
        {toonBeheersing && (
          <label className={`kr-beheers${beheerst ? ' aan' : ''}`}>
            <input type="checkbox" checked={beheerst} onChange={(e) => markeerBeheerst(itemId, rubriek, e.target.checked)} />
            <span>{beheerst ? 'Ik ken dit ✓' : 'Ik ken dit'}</span>
          </label>
        )}
      </div>
      {children}
    </section>
  )
}

// Eén editie: rubrieken bovenaan, oefeningen onderaan.
function EditieView({ datum, tracked = true }: { datum: string; tracked?: boolean }) {
  const editie = useMemo(() => bouwEditie(datum), [datum])
  const { registreer, rondAf, registreerItem, beheersteItems } = useVoortgang()
  const [resultaten, setResultaten] = useState<Record<string, boolean>>({})

  const ids = useMemo(
    () => Object.fromEntries(RUBRIEKEN.map((r) => [r.id, itemIdVoor(r.id, editie)])) as Record<string, string>,
    [editie],
  )

  useEffect(() => { setResultaten({}) }, [datum])

  useEffect(() => {
    if (!tracked) return
    if (Object.keys(resultaten).length >= RUBRIEKEN.length) {
      const goed = Object.values(resultaten).filter(Boolean).length
      rondAf(datum, goed, RUBRIEKEN.length)
    }
  }, [resultaten, datum, rondAf, tracked])

  function maakVragen(): Vraag[] {
    const vandaag = bouwVragen(editie)
    if (!tracked) return vandaag
    const vandaagIds = new Set(Object.values(ids))
    const due = beheersteItems()
      .filter((s) => !vandaagIds.has(s.itemId))
      .sort((a, b) => (a.laatst ?? '').localeCompare(b.laatst ?? ''))
      .slice(0, 6)
      .map((s) => s.itemId)
    return [...vandaag, ...bouwHerhaalVragen(due)]
  }

  function onUitslag(vraag: Vraag, goed: boolean) {
    const info = ontleedVraag(vraag)
    if (!info || !tracked) return
    registreerItem(info.itemId, info.rubriek, goed)
    if (info.soort === 'vandaag') {
      registreer(datum, info.rubriek, goed)
      setResultaten((r) => (info.rubriek in r ? r : { ...r, [info.rubriek]: goed }))
    }
  }

  const herhaalAantal = tracked ? Math.min(6, beheersteItems().filter((s) => !new Set(Object.values(ids)).has(s.itemId)).length) : 0

  return (
    <>
      <div className="kr-grid">
        <section className="kr-rubriek kr-breed">
          <div className="kr-rubriek-kop"><span className="kr-label">Voorpagina · nieuws &amp; weer</span></div>
          <NieuwsWeer />
        </section>

        <RubriekKaart rubriek="land" itemId={ids.land} label="Land van de dag" toonBeheersing={tracked}>
          <LandSectie land={editie.land} />
        </RubriekKaart>
        <RubriekKaart rubriek="eredivisie" itemId={ids.eredivisie} label="Eredivisie" toonBeheersing={tracked}>
          <EredivisieSectie kampioen={editie.kampioen} />
        </RubriekKaart>
        <RubriekKaart rubriek="sein" itemId={ids.sein} label="Seinvlag &amp; morse" toonBeheersing={tracked}>
          <SeinSectie sein={editie.sein} />
        </RubriekKaart>
        <RubriekKaart rubriek="geschiedenis" itemId={ids.geschiedenis} label="Vaderlandse geschiedenis" toonBeheersing={tracked}>
          <GeschiedenisSectie hist={editie.hist} />
        </RubriekKaart>
        <RubriekKaart rubriek="spaans" itemId={ids.spaans} label="Spaanse zin" toonBeheersing={tracked}>
          <SpaansSectie zin={editie.zin} />
        </RubriekKaart>
        <RubriekKaart rubriek="bridge" itemId={ids.bridge} label="Bridge" toonBeheersing={tracked}>
          <BridgeSectie bridge={editie.bridge} />
        </RubriekKaart>
        <RubriekKaart rubriek="weetje" itemId={ids.weetje} label="Weetje van de dag" breed toonBeheersing={tracked}>
          <WeetjeSectie weetje={editie.weetje} />
        </RubriekKaart>
        <RubriekKaart rubriek="vogel" itemId={ids.vogel} label="Vogel van de dag" breed toonBeheersing={tracked}>
          <VogelSectie vogel={editie.vogel} />
        </RubriekKaart>
        <RubriekKaart rubriek="flora" itemId={ids.flora} label="Flora van de dag" breed toonBeheersing={tracked}>
          <FloraSectie plant={editie.plant} />
        </RubriekKaart>
      </div>

      <section className="kr-oefeningen">
        <div className="kr-oef-kop">
          <h2>Oefeningen</h2>
          <p>
            De {RUBRIEKEN.length} rubrieken van vandaag
            {herhaalAantal > 0 ? `, plus ${herhaalAantal} herhaalvraag${herhaalAantal === 1 ? '' : 'en'} uit wat je "goed kent".` : '.'}
            {tracked ? ' Je resultaat wordt bewaard.' : ''}
          </p>
        </div>
        <div className="km-app kr-quizwrap" style={{ '--km-accent': '#334155' } as CSSProperties}>
          <QuizRunner key={datum} maak={maakVragen} onUitslag={onUitslag} herstartLabel="Opnieuw oefenen" />
        </div>
      </section>
    </>
  )
}

// ── Overzicht: beheersing & zwakke plekken ──
function Overzicht() {
  const { state } = useVoortgang()
  const items = Object.values(state.items)
  const totGoed = items.reduce((a, i) => a + i.goed, 0)
  const totFout = items.reduce((a, i) => a + i.fout, 0)
  const totaal = totGoed + totFout
  const beheerstAantal = items.filter((i) => i.beheerst).length

  const perRubriek = RUBRIEKEN.map((r) => {
    const rs = items.filter((i) => i.rubriek === r.id)
    const g = rs.reduce((a, i) => a + i.goed, 0)
    const f = rs.reduce((a, i) => a + i.fout, 0)
    const t = g + f
    return { id: r.id, label: RUBRIEK_LABEL[r.id], g, f, t, rate: t ? g / t : null, beheerst: rs.filter((i) => i.beheerst).length }
  }).filter((x) => x.t > 0 || x.beheerst > 0)
    .sort((a, b) => (a.rate ?? 1) - (b.rate ?? 1))

  const zwak = items
    .filter((i) => i.goed + i.fout >= 2 && i.goed / (i.goed + i.fout) < 0.6)
    .sort((a, b) => a.goed / (a.goed + a.fout) - b.goed / (b.goed + b.fout) || b.fout - a.fout)
    .slice(0, 20)

  if (totaal === 0 && beheerstAantal === 0) {
    return (
      <div className="kr-archief">
        <div className="kr-page-head"><h2>Overzicht</h2><p>Zodra je oefeningen maakt, zie je hier per onderwerp hoe goed je het doet en welke vragen je vaak fout hebt.</p></div>
      </div>
    )
  }

  return (
    <div className="kr-overzicht">
      <div className="kr-page-head"><h2>Overzicht</h2><p>Waar sta je? Hieronder je score per onderwerp en de vragen die je het vaakst mist.</p></div>

      <div className="kr-stat-tegels">
        <div className="kr-tegel"><span className="kr-tegel-getal">{totaal ? Math.round((totGoed / totaal) * 100) : 0}%</span><span className="kr-tegel-label">goed beantwoord</span></div>
        <div className="kr-tegel"><span className="kr-tegel-getal">{totaal}</span><span className="kr-tegel-label">vragen gemaakt</span></div>
        <div className="kr-tegel"><span className="kr-tegel-getal">{beheerstAantal}</span><span className="kr-tegel-label">onderwerpen "goed gekend"</span></div>
      </div>

      <h3 className="kr-ovz-kop">Per onderwerp <span>(zwakste eerst)</span></h3>
      <ul className="kr-rubriek-scores">
        {perRubriek.map((r) => (
          <li key={r.id}>
            <span className="kr-rs-label">{r.label}</span>
            <span className="kr-rs-balk"><span className="kr-rs-vul" style={{ width: `${Math.round((r.rate ?? 0) * 100)}%`, background: (r.rate ?? 1) < 0.6 ? 'var(--kr-rood)' : '#3a7d44' }} /></span>
            <span className="kr-rs-cijfer">{r.t ? `${Math.round((r.rate ?? 0) * 100)}%` : '—'}<small> ({r.g}/{r.t})</small></span>
          </li>
        ))}
      </ul>

      {zwak.length > 0 && (
        <>
          <h3 className="kr-ovz-kop">Vaak fout — hier extra op letten</h3>
          <ul className="kr-zwak-lijst">
            {zwak.map((i) => (
              <li key={i.itemId}>
                <span className="kr-zwak-rubriek">{RUBRIEK_LABEL[i.rubriek] ?? i.rubriek}</span>
                <span className="kr-zwak-item">{itemLabel(i.itemId)}</span>
                <span className="kr-zwak-score">{i.goed}/{i.goed + i.fout} goed</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

// Archief: overzicht van eerdere edities om te herhalen.
function Archief({ opDatum }: { opDatum: (d: string) => void }) {
  const { state } = useVoortgang()
  const dagen = useMemo(() => {
    const lijst: string[] = []
    const vandaag = new Date()
    for (let i = 0; i < 30; i++) {
      const d = new Date(vandaag)
      d.setDate(vandaag.getDate() - i)
      lijst.push(datumSleutel(d))
    }
    return lijst
  }, [])

  return (
    <div className="kr-archief">
      <div className="kr-page-head"><h2>Archief</h2><p>Elke voorbije editie blijft bewaard. Klik een dag om de rubrieken en oefeningen te herhalen.</p></div>
      <ul className="kr-archief-lijst">
        {dagen.map((d, i) => {
          const v = state.edities[d]
          const afgerond = v?.afgerondOp
          return (
            <li key={d}>
              <button type="button" className="kr-archief-item" onClick={() => opDatum(d)}>
                <span className="kr-archief-dag">{i === 0 ? 'Vandaag' : korteDatum(d)}</span>
                <span className="kr-archief-status">{afgerond ? `✓ ${v?.score}/${v?.totaal}` : v ? 'bezig' : 'nog niet gedaan'}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function AuthKnop() {
  const { syncBeschikbaar, gebruiker, syncStatus, inloggen, uitloggen } = useVoortgang()
  if (!syncBeschikbaar) return <span className="kr-auth-note">lokaal opgeslagen</span>
  if (gebruiker) {
    return (
      <span className="kr-auth">
        {gebruiker.foto && <img className="kr-avatar" src={gebruiker.foto} alt="" referrerPolicy="no-referrer" />}
        <span className="kr-auth-naam">{syncStatus === 'gesynct' ? '✓ ' : ''}{gebruiker.naam ?? 'Ingelogd'}</span>
        <button type="button" className="kr-auth-knop" onClick={() => uitloggen()}>Uitloggen</button>
      </span>
    )
  }
  return (
    <button type="button" className="kr-auth-knop kr-auth-in" onClick={() => inloggen()} disabled={syncStatus === 'bezig'}>
      Inloggen met Google
    </button>
  )
}

type Tab = 'vandaag' | 'archief' | 'overzicht'

export default function Krant() {
  const vandaag = datumSleutel(new Date())
  const [tab, setTab] = useState<Tab>('vandaag')
  const [archiefDatum, setArchiefDatum] = useState<string | null>(null)
  const [extraSeed, setExtraSeed] = useState<string | null>(null)

  function nieuweEditie() {
    setExtraSeed(`extra-${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="kr-app">
      <header className="kr-masthead">
        <div className="kr-masthead-top">
          <span className="kr-editie">Editie · {langeDatum(vandaag)}</span>
          <AuthKnop />
        </div>
        <h1 className="kr-titel">De Dagkrant</h1>
        <p className="kr-ondertitel">Elke dag een beetje algemener ontwikkeld</p>
        <nav className="kr-nav">
          <button type="button" className={`kr-tab${tab === 'vandaag' ? ' active' : ''}`} onClick={() => { setTab('vandaag'); setExtraSeed(null) }}>Vandaag</button>
          <button type="button" className={`kr-tab${tab === 'archief' ? ' active' : ''}`} onClick={() => { setTab('archief'); setArchiefDatum(null) }}>Archief</button>
          <button type="button" className={`kr-tab${tab === 'overzicht' ? ' active' : ''}`} onClick={() => setTab('overzicht')}>Overzicht</button>
        </nav>
      </header>

      <main className="kr-main">
        {tab === 'vandaag' && (
          <>
            <div className="kr-editiebalk">
              <span className={`kr-extra-badge${extraSeed ? ' extra' : ''}`}>
                {extraSeed ? 'Extra editie · telt niet mee in je archief' : 'Editie van vandaag'}
              </span>
              <div className="kr-editie-acties">
                {extraSeed && <button type="button" className="kr-terug-knop" onClick={() => setExtraSeed(null)}>← Terug naar vandaag</button>}
                <button type="button" className="kr-nieuw-knop" onClick={nieuweEditie}>Nieuwe editie</button>
              </div>
            </div>
            <EditieView key={extraSeed ?? vandaag} datum={extraSeed ?? vandaag} tracked={extraSeed === null} />
          </>
        )}

        {tab === 'archief' && archiefDatum === null && <Archief opDatum={setArchiefDatum} />}
        {tab === 'archief' && archiefDatum !== null && (
          <>
            <div className="kr-terug">
              <button type="button" className="kr-btn-terug" onClick={() => setArchiefDatum(null)}>← Terug naar archief</button>
              <span className="kr-terug-datum">{langeDatum(archiefDatum)}</span>
            </div>
            <EditieView datum={archiefDatum} />
          </>
        )}

        {tab === 'overzicht' && <Overzicht />}
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  const { syncBeschikbaar, gebruiker } = useVoortgang()
  return (
    <footer className="kr-footer">
      <p>
        De Dagkrant — je eigen leerkrant.{' '}
        {gebruiker ? 'Voortgang wordt gesynchroniseerd via je Google-account.'
          : syncBeschikbaar ? 'Log in om je voortgang op al je apparaten te synchroniseren.'
            : 'Voortgang wordt lokaal in deze browser bewaard.'}
      </p>
    </footer>
  )
}
