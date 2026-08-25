import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import QuizRunner, { type Vraag } from '../leer/QuizRunner'
import { bouwEditie, RUBRIEKEN } from './editie'
import { bouwVragen, rubriekVanVraag } from './oefeningen'
import { datumSleutel, parseDatum } from './rng'
import {
  BridgeSectie, EredivisieSectie, FloraSectie, GeschiedenisSectie, LandSectie,
  NieuwsWeer, SeinSectie, SpaansSectie, VogelSectie, WeetjeSectie,
} from './secties'
import { useVoortgang } from './store'
import './krant.css'

function langeDatum(sleutel: string): string {
  return parseDatum(sleutel).toLocaleDateString('nl-NL', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

function korteDatum(sleutel: string): string {
  return parseDatum(sleutel).toLocaleDateString('nl-NL', {
    weekday: 'short', day: 'numeric', month: 'short',
  })
}

// Eén editie: rubrieken bovenaan, oefeningen onderaan.
function EditieView({ datum }: { datum: string }) {
  const editie = useMemo(() => bouwEditie(datum), [datum])
  const { registreer, rondAf } = useVoortgang()
  const [resultaten, setResultaten] = useState<Record<string, boolean>>({})

  // Nieuwe editie → resultaten resetten.
  useEffect(() => {
    setResultaten({})
  }, [datum])

  // Zodra alle rubrieken beantwoord zijn: editie afronden.
  useEffect(() => {
    const gedaan = Object.keys(resultaten).length
    if (gedaan >= RUBRIEKEN.length) {
      const goed = Object.values(resultaten).filter(Boolean).length
      rondAf(datum, goed, RUBRIEKEN.length)
    }
  }, [resultaten, datum, rondAf])

  function onUitslag(vraag: Vraag, goed: boolean) {
    const rubriek = rubriekVanVraag(vraag)
    if (!rubriek) return
    registreer(datum, rubriek, goed)
    setResultaten((r) => (rubriek in r ? r : { ...r, [rubriek]: goed }))
  }

  return (
    <>
      <div className="kr-grid">
        <section className="kr-rubriek kr-breed">
          <span className="kr-label">Voorpagina · nieuws &amp; weer</span>
          <NieuwsWeer />
        </section>

        <section className="kr-rubriek">
          <span className="kr-label">Land van de dag</span>
          <LandSectie land={editie.land} />
        </section>

        <section className="kr-rubriek">
          <span className="kr-label">Eredivisie</span>
          <EredivisieSectie kampioen={editie.kampioen} />
        </section>

        <section className="kr-rubriek">
          <span className="kr-label">Seinvlag &amp; morse</span>
          <SeinSectie sein={editie.sein} />
        </section>

        <section className="kr-rubriek">
          <span className="kr-label">Vaderlandse geschiedenis</span>
          <GeschiedenisSectie hist={editie.hist} />
        </section>

        <section className="kr-rubriek">
          <span className="kr-label">Spaanse zin</span>
          <SpaansSectie zin={editie.zin} />
        </section>

        <section className="kr-rubriek">
          <span className="kr-label">Bridge</span>
          <BridgeSectie bridge={editie.bridge} />
        </section>

        <section className="kr-rubriek kr-breed">
          <span className="kr-label">Weetje van de dag</span>
          <WeetjeSectie weetje={editie.weetje} />
        </section>

        <section className="kr-rubriek kr-breed">
          <span className="kr-label">Vogel van de dag</span>
          <VogelSectie vogel={editie.vogel} />
        </section>

        <section className="kr-rubriek kr-breed">
          <span className="kr-label">Flora van de dag</span>
          <FloraSectie plant={editie.plant} />
        </section>
      </div>

      <section className="kr-oefeningen">
        <div className="kr-oef-kop">
          <h2>Oefeningen</h2>
          <p>Toets jezelf op alle rubrieken van vandaag. Je resultaat wordt bewaard in het archief.</p>
        </div>
        <div className="km-app kr-quizwrap" style={{ '--km-accent': '#334155' } as CSSProperties}>
          <QuizRunner key={datum} maak={() => bouwVragen(editie)} onUitslag={onUitslag} herstartLabel="Opnieuw oefenen" />
        </div>
      </section>
    </>
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
      <div className="kr-page-head">
        <h2>Archief</h2>
        <p>Elke voorbije editie blijft bewaard. Klik een dag om de rubrieken en oefeningen te herhalen.</p>
      </div>
      <ul className="kr-archief-lijst">
        {dagen.map((d, i) => {
          const v = state.edities[d]
          const afgerond = v?.afgerondOp
          return (
            <li key={d}>
              <button type="button" className="kr-archief-item" onClick={() => opDatum(d)}>
                <span className="kr-archief-dag">{i === 0 ? 'Vandaag' : korteDatum(d)}</span>
                <span className="kr-archief-status">
                  {afgerond ? `✓ ${v?.score}/${v?.totaal}` : v ? 'bezig' : 'nog niet gedaan'}
                </span>
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

export default function Krant() {
  const vandaag = datumSleutel(new Date())
  const [tab, setTab] = useState<'vandaag' | 'archief'>('vandaag')
  const [archiefDatum, setArchiefDatum] = useState<string | null>(null)

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
          <button type="button" className={`kr-tab${tab === 'vandaag' ? ' active' : ''}`} onClick={() => setTab('vandaag')}>Vandaag</button>
          <button type="button" className={`kr-tab${tab === 'archief' ? ' active' : ''}`} onClick={() => { setTab('archief'); setArchiefDatum(null) }}>Archief</button>
        </nav>
      </header>

      <main className="kr-main">
        {tab === 'vandaag' && <EditieView datum={vandaag} />}

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
        {gebruiker
          ? 'Voortgang wordt gesynchroniseerd via je Google-account.'
          : syncBeschikbaar
            ? 'Log in om je voortgang op al je apparaten te synchroniseren.'
            : 'Voortgang wordt lokaal in deze browser bewaard.'}
      </p>
    </footer>
  )
}
