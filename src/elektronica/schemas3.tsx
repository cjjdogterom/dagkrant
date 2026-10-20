import type { ReactNode } from 'react'

export const SCHEMAS3: Record<number, ReactNode> = {

  /* 201 — Opbouw meterkast: blokschema */
  201: (
    <svg className="kr-esvg" viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg">
      {/* blocks */}
      <rect x="5" y="30" width="56" height="36" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="33" y="44" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Hoofd-</text>
      <text x="33" y="54" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">zekering</text>

      <rect x="75" y="30" width="50" height="36" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="100" y="44" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">kWh-</text>
      <text x="100" y="54" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">meter</text>

      <rect x="139" y="30" width="50" height="36" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="164" y="44" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Hoofd-</text>
      <text x="164" y="54" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">schakelaar</text>

      <rect x="203" y="30" width="50" height="36" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="228" y="44" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Aardlek-</text>
      <text x="228" y="54" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">schakelaar</text>

      <rect x="267" y="30" width="56" height="36" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="295" y="44" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Installatie-</text>
      <text x="295" y="54" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">automaten</text>

      {/* arrows */}
      <line x1="61" y1="48" x2="75" y2="48" stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arr201)" />
      <line x1="125" y1="48" x2="139" y2="48" stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arr201)" />
      <line x1="189" y1="48" x2="203" y2="48" stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arr201)" />
      <line x1="253" y1="48" x2="267" y2="48" stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arr201)" />

      <defs>
        <marker id="arr201" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>

      {/* labels */}
      <text x="33" y="82" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>netbeheerder</text>
      <line x1="0" y1="25" x2="0" y2="71" stroke="currentColor" strokeWidth={1} strokeDasharray="2 2" />
      <line x1="133" y1="25" x2="133" y2="71" stroke="currentColor" strokeWidth={1} strokeDasharray="2 2" />
      <text x="67" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>netbeheerder</text>
      <text x="240" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>jouw installatie</text>
    </svg>
  ),

  /* 202 — Aardlekschakelaar: ringkern met L en N */
  202: (
    <svg className="kr-esvg" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      {/* toroidal core */}
      <ellipse cx="150" cy="70" rx="40" ry="30" stroke="currentColor" strokeWidth={2} fill="none" />
      <text x="150" y="74" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">ringkern</text>

      {/* L wire through core */}
      <line x1="30" y1="55" x2="110" y2="55" stroke="#8B4513" strokeWidth={2} />
      <line x1="190" y1="55" x2="270" y2="55" stroke="#8B4513" strokeWidth={2} />
      <text x="30" y="50" fontSize={9} fill="#8B4513" fontFamily="system-ui, sans-serif">L (bruin)</text>

      {/* N wire through core */}
      <line x1="30" y1="85" x2="110" y2="85" stroke="#1565c0" strokeWidth={2} />
      <line x1="190" y1="85" x2="270" y2="85" stroke="#1565c0" strokeWidth={2} />
      <text x="30" y="100" fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">N (blauw)</text>

      {/* differential current arrow */}
      <path d="M150,100 L150,130" stroke="currentColor" strokeWidth={1.5} fill="none" markerEnd="url(#arr202)" />
      <text x="150" y="148" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">verschilstroom detectie</text>
      <text x="150" y="158" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">{">"} 30 mA → uitschakelen</text>

      {/* net side / load side labels */}
      <text x="30" y="22" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">netzijde</text>
      <text x="230" y="22" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">belastingzijde</text>

      <defs>
        <marker id="arr202" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  ),

  /* 203 — Type A vs AC aardlek: golfvormen */
  203: (
    <svg className="kr-esvg" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      {/* AC type - full sine */}
      <text x="75" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Type AC</text>
      <line x1="20" y1="55" x2="140" y2="55" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 2" />
      <path d="M20,55 C35,25 50,25 65,55 C80,85 95,85 110,55 C125,25 140,25 140,55" stroke="#1565c0" strokeWidth={2} fill="none" />
      <text x="75" y="90" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">sinusvormig</text>

      {/* A type - sine + half wave */}
      <text x="225" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Type A</text>
      <line x1="170" y1="55" x2="290" y2="55" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 2" />
      <path d="M170,55 C185,25 200,25 215,55 C230,85 245,85 260,55 C275,25 290,25 290,55" stroke="#1565c0" strokeWidth={2} fill="none" />
      {/* half-wave pulsating DC overlay */}
      <path d="M170,55 C185,35 200,35 215,55 L230,55 C245,35 260,35 275,55 L290,55" stroke="#c62828" strokeWidth={2} fill="none" />
      <text x="225" y="90" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">sinus + pulserend DC</text>

      {/* legend */}
      <line x1="70" y1="110" x2="90" y2="110" stroke="#1565c0" strokeWidth={2} />
      <text x="95" y="113" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">wisselstroom</text>
      <line x1="170" y1="110" x2="190" y2="110" stroke="#c62828" strokeWidth={2} />
      <text x="195" y="113" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">pulserend gelijkstroom</text>

      <text x="150" y="135" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.7}>Type A detecteert beide; Type AC alleen wisselstroom</text>
    </svg>
  ),

  /* 204 — Installatieautomaat B16: uitschakelcurve */
  204: (
    <svg className="kr-esvg" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Uitschakelcurve B16</text>

      {/* axes */}
      <line x1="50" y1="160" x2="280" y2="160" stroke="currentColor" strokeWidth={1.5} />
      <line x1="50" y1="160" x2="50" y2="25" stroke="currentColor" strokeWidth={1.5} />

      {/* Y axis label */}
      <text x="15" y="90" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" transform="rotate(-90,15,90)">uitschakeltijd</text>

      {/* X axis label */}
      <text x="165" y="178" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">stroom (× In)</text>

      {/* X ticks */}
      <text x="50" y="172" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1</text>
      <text x="105" y="172" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1.13</text>
      <text x="160" y="172" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1.45</text>
      <text x="200" y="172" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">3</text>
      <text x="240" y="172" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">5</text>

      {/* thermal region (slow) */}
      <path d="M105,35 C120,50 140,80 160,100 L160,155" stroke="#c62828" strokeWidth={2} fill="none" />
      <text x="125" y="48" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif">thermisch</text>
      <text x="125" y="57" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif">(langzaam)</text>

      {/* magnetic region (fast) */}
      <line x1="200" y1="155" x2="200" y2="140" stroke="#1565c0" strokeWidth={2} />
      <line x1="200" y1="140" x2="240" y2="140" stroke="#1565c0" strokeWidth={2} />
      <line x1="240" y1="140" x2="240" y2="155" stroke="#1565c0" strokeWidth={2} />
      <text x="220" y="135" fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">magnetisch</text>
      <text x="220" y="125" fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">(direct, 3-5× In)</text>

      {/* B-range indicator */}
      <rect x="195" y="142" width="50" height="14" rx="2" fill="#1565c0" fillOpacity={0.1} stroke="#1565c0" strokeWidth={0.5} />
      <text x="220" y="152" fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">B-range</text>

      {/* no-trip zone */}
      <text x="75" y="150" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" opacity={0.6}>geen</text>
      <text x="75" y="158" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" opacity={0.6}>uitschakeling</text>
    </svg>
  ),

  /* 206 — Max groepen per aardlek */
  206: (
    <svg className="kr-esvg" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg">
      <text x="130" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Max. 4 groepen per aardlek</text>

      {/* RCD block */}
      <rect x="95" y="25" width="70" height="30" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="130" y="44" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">ALS 30 mA</text>

      {/* connection lines down */}
      <line x1="130" y1="55" x2="130" y2="70" stroke="currentColor" strokeWidth={1.5} />

      {/* horizontal bus */}
      <line x1="30" y1="70" x2="230" y2="70" stroke="currentColor" strokeWidth={2} />

      {/* 4 automats */}
      {[0, 1, 2, 3].map(i => {
        const cx = 50 + i * 55
        return (
          <g key={i}>
            <line x1={cx} y1={70} x2={cx} y2={82} stroke="currentColor" strokeWidth={1.5} />
            <rect x={cx - 18} y={82} width={36} height={24} rx="2" stroke="currentColor" strokeWidth={1.5} fill="none" />
            <text x={cx} y={97} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">B16</text>
            <line x1={cx} y1={106} x2={cx} y2={118} stroke="currentColor" strokeWidth={1.5} />
            <text x={cx} y={130} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">groep {i + 1}</text>
          </g>
        )
      })}
    </svg>
  ),

  /* 208 — Perilex connector pinout */
  208: (
    <svg className="kr-esvg" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Perilex stekker (5-polig)</text>

      {/* connector outline */}
      <rect x="100" y="30" width="100" height="80" rx="10" stroke="currentColor" strokeWidth={2} fill="none" />

      {/* pins - perilex layout */}
      {/* L1 top-left */}
      <circle cx="130" cy="50" r="6" stroke="#c62828" strokeWidth={2} fill="none" />
      <text x="130" y="53" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">L1</text>

      {/* L2 top-right */}
      <circle cx="170" cy="50" r="6" stroke="#2e7d32" strokeWidth={2} fill="none" />
      <text x="170" y="53" fontSize={7} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">L2</text>

      {/* N bottom-left */}
      <circle cx="125" cy="85" r="6" stroke="#1565c0" strokeWidth={2} fill="none" />
      <text x="125" y="88" fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">N</text>

      {/* PE bottom-right */}
      <circle cx="175" cy="85" r="6" stroke="#2e7d32" strokeWidth={2} fill="none" />
      <text x="175" y="88" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">PE</text>

      {/* flat pin center (ground) */}
      <rect x="145" y="62" width="10" height="16" rx="2" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="150" y="74" fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">aarde</text>

      {/* Labels right side */}
      <text x="220" y="50" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">L1 = fase 1</text>
      <text x="220" y="62" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif">L2 = fase 2</text>
      <text x="220" y="74" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">N = nul</text>
      <text x="220" y="86" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">PE = aarde</text>

      <text x="150" y="130" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">400 V tussen L1 en L2</text>
      <text x="150" y="142" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">230 V tussen L en N</text>
      <text x="150" y="155" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>Gebruikt voor kookplaat / oven (2 fasen)</text>
    </svg>
  ),

  /* 209 — Draadkleuren */
  209: (
    <svg className="kr-esvg" viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Draadkleuren (NEN 1010)</text>

      {/* L - bruin */}
      <line x1="30" y1="40" x2="110" y2="40" stroke="#8B4513" strokeWidth={4} strokeLinecap="round" />
      <text x="120" y="43" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">L (fase) = bruin</text>
      <text x="260" y="43" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">230 V!</text>

      {/* N - blauw */}
      <line x1="30" y1="62" x2="110" y2="62" stroke="#1565c0" strokeWidth={4} strokeLinecap="round" />
      <text x="120" y="65" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">N (nul) = blauw</text>

      {/* PE - geel/groen gestreept */}
      <line x1="30" y1="84" x2="110" y2="84" stroke="#2e7d32" strokeWidth={4} strokeLinecap="round" />
      <line x1="30" y1="84" x2="110" y2="84" stroke="#cccc00" strokeWidth={4} strokeLinecap="round" strokeDasharray="6 6" />
      <text x="120" y="87" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">PE (aarde) = geel/groen</text>

      <text x="150" y="105" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>Let op: in oude installaties kunnen andere kleuren voorkomen (zwart, rood, grijs)</text>
    </svg>
  ),

  /* 210 — Draaddoorsnede */
  210: (
    <svg className="kr-esvg" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Draaddoorsneden</text>

      {/* 1.5 mm² */}
      <circle cx="55" cy="55" r="8" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <circle cx="55" cy="55" r="5" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <text x="55" y="80" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">1,5 mm²</text>
      <text x="55" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">licht</text>
      <text x="55" y="102" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">max 16 A</text>

      {/* 2.5 mm² */}
      <circle cx="150" cy="55" r="11" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <circle cx="150" cy="55" r="7" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <text x="150" y="80" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">2,5 mm²</text>
      <text x="150" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">stopcontacten</text>
      <text x="150" y="102" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">max 20 A</text>

      {/* 4.0 mm² */}
      <circle cx="245" cy="55" r="14" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <circle cx="245" cy="55" r="10" fill="currentColor" fillOpacity={0.2} stroke="none" />
      <text x="245" y="80" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">4,0 mm²</text>
      <text x="245" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">kookgroep</text>
      <text x="245" y="102" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">max 25 A</text>

      <text x="150" y="118" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>doorsnede op schaal</text>
    </svg>
  ),

  /* 211 — Aarding en vereffening (badkamer) */
  211: (
    <svg className="kr-esvg" viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Potentiaalvereffening badkamer</text>

      {/* bathroom outline */}
      <rect x="40" y="30" width="220" height="100" rx="3" stroke="currentColor" strokeWidth={1} fill="none" strokeDasharray="4 2" />
      <text x="150" y="42" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.5}>badkamer</text>

      {/* metal objects */}
      <rect x="55" y="55" width="40" height="25" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="75" y="71" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">bad</text>

      <rect x="120" y="55" width="30" height="30" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="135" y="73" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">water-</text>
      <text x="135" y="82" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">leiding</text>

      <rect x="175" y="55" width="35" height="25" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="192" y="71" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">CV</text>

      {/* bonding wires - geel/groen */}
      <line x1="75" y1="80" x2="75" y2="110" stroke="#2e7d32" strokeWidth={2} />
      <line x1="135" y1="85" x2="135" y2="110" stroke="#2e7d32" strokeWidth={2} />
      <line x1="192" y1="80" x2="192" y2="110" stroke="#2e7d32" strokeWidth={2} />

      {/* bonding bus */}
      <line x1="55" y1="110" x2="220" y2="110" stroke="#2e7d32" strokeWidth={2.5} />
      <rect x="100" y="105" width="70" height="12" rx="2" stroke="#2e7d32" strokeWidth={1} fill="none" />
      <text x="135" y="114" fontSize={7} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">vereffeningsrail</text>

      {/* connection to PE */}
      <line x1="135" y1="117" x2="135" y2="135" stroke="#2e7d32" strokeWidth={2} />
      <text x="135" y="148" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">→ PE (hoofdaardklem)</text>

      {/* earth symbol */}
      <line x1="125" y1="155" x2="145" y2="155" stroke="currentColor" strokeWidth={1.5} />
      <line x1="129" y1="159" x2="141" y2="159" stroke="currentColor" strokeWidth={1.5} />
      <line x1="133" y1="163" x2="137" y2="163" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  ),

  /* 213 — TN-C-S stelsel */
  213: (
    <svg className="kr-esvg" viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">TN-C-S stelsel</text>

      {/* transformer */}
      <circle cx="30" cy="70" r="15" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="30" y="74" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">trafo</text>

      {/* earth at transformer */}
      <line x1="30" y1="85" x2="30" y2="100" stroke="currentColor" strokeWidth={1.5} />
      <line x1="22" y1="100" x2="38" y2="100" stroke="currentColor" strokeWidth={1.5} />
      <line x1="25" y1="104" x2="35" y2="104" stroke="currentColor" strokeWidth={1.5} />
      <line x1="28" y1="108" x2="32" y2="108" stroke="currentColor" strokeWidth={1.5} />

      {/* TN-C section: PEN combined */}
      <line x1="45" y1="50" x2="160" y2="50" stroke="#c62828" strokeWidth={2} />
      <text x="100" y="45" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">L</text>

      <line x1="45" y1="70" x2="160" y2="70" stroke="#666" strokeWidth={2} />
      <text x="100" y="66" fontSize={7} fill="#666" fontFamily="system-ui, sans-serif" textAnchor="middle">PEN (gecombineerd)</text>

      {/* TN-C label */}
      <text x="100" y="92" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">TN-C gedeelte</text>
      <rect x="55" y="82" width="90" height="14" rx="2" stroke="currentColor" strokeWidth={0.5} fill="none" strokeDasharray="3 2" />

      {/* split point */}
      <circle cx="170" cy="70" r="3" fill="currentColor" />
      <text x="170" y="118" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">splitspunt</text>
      <line x1="170" y1="73" x2="170" y2="108" stroke="currentColor" strokeWidth={1} strokeDasharray="2 2" />

      {/* TN-S section: separate N and PE */}
      <line x1="160" y1="50" x2="310" y2="50" stroke="#c62828" strokeWidth={2} />
      <text x="240" y="45" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">L</text>

      <line x1="170" y1="65" x2="310" y2="65" stroke="#1565c0" strokeWidth={2} />
      <text x="240" y="62" fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">N (blauw)</text>

      <line x1="170" y1="80" x2="310" y2="80" stroke="#2e7d32" strokeWidth={2} strokeDasharray="6 3" />
      <text x="240" y="77" fontSize={7} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">PE (geel/groen)</text>

      {/* TN-S label */}
      <text x="240" y="100" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">TN-S gedeelte</text>
      <rect x="195" y="90" width="90" height="14" rx="2" stroke="currentColor" strokeWidth={0.5} fill="none" strokeDasharray="3 2" />

      {/* house icon */}
      <path d="M295,30 L310,22 L325,30 L325,50 L295,50 Z" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="310" y="44" fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">huis</text>
    </svg>
  ),

  /* 214 — Wisselschakeling */
  214: (
    <svg className="kr-esvg" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Wisselschakeling</text>

      {/* L supply */}
      <line x1="20" y1="50" x2="60" y2="50" stroke="#8B4513" strokeWidth={2} />
      <text x="20" y="44" fontSize={8} fill="#8B4513" fontFamily="system-ui, sans-serif">L</text>

      {/* Switch 1 */}
      <circle cx="65" cy="50" r="4" fill="currentColor" />
      {/* two wires from switch 1 */}
      <line x1="69" y1="48" x2="180" y2="38" stroke="currentColor" strokeWidth={1.5} />
      <line x1="69" y1="52" x2="180" y2="62" stroke="currentColor" strokeWidth={1.5} />
      {/* switch arm */}
      <line x1="65" y1="50" x2="80" y2="38" stroke="currentColor" strokeWidth={2} />

      {/* Switch 2 */}
      <circle cx="185" cy="38" r="3" fill="currentColor" />
      <circle cx="185" cy="62" r="3" fill="currentColor" />
      <circle cx="190" cy="50" r="4" fill="currentColor" />
      {/* switch arm */}
      <line x1="190" y1="50" x2="185" y2="38" stroke="currentColor" strokeWidth={2} />

      {/* to lamp */}
      <line x1="194" y1="50" x2="240" y2="50" stroke="currentColor" strokeWidth={1.5} />

      {/* lamp symbol */}
      <circle cx="250" cy="50" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <line x1="243" y1="43" x2="257" y2="57" stroke="currentColor" strokeWidth={1} />
      <line x1="257" y1="43" x2="243" y2="57" stroke="currentColor" strokeWidth={1} />

      {/* N return */}
      <line x1="260" y1="50" x2="280" y2="50" stroke="#1565c0" strokeWidth={2} />
      <text x="280" y="44" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">N</text>

      {/* labels */}
      <text x="65" y="80" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">schakelaar 1</text>
      <text x="187" y="80" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">schakelaar 2</text>

      {/* wisseldraden label */}
      <text x="125" y="32" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>wisseldraden</text>

      <text x="150" y="105" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>Bediening vanuit 2 plaatsen (bv. boven/onder trap)</text>
    </svg>
  ),

  /* 215 — Hotelschakeling */
  215: (
    <svg className="kr-esvg" viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Hotelschakeling</text>

      {/* L supply */}
      <line x1="10" y1="55" x2="40" y2="55" stroke="#8B4513" strokeWidth={2} />
      <text x="10" y="49" fontSize={8} fill="#8B4513" fontFamily="system-ui, sans-serif">L</text>

      {/* Switch 1 - wisselschakelaar */}
      <circle cx="45" cy="55" r="4" fill="currentColor" />
      <line x1="49" y1="53" x2="100" y2="40" stroke="currentColor" strokeWidth={1.5} />
      <line x1="49" y1="57" x2="100" y2="68" stroke="currentColor" strokeWidth={1.5} />
      <line x1="45" y1="55" x2="58" y2="42" stroke="currentColor" strokeWidth={2} />

      {/* Kruisschakelaar (middle) */}
      <rect x="100" y="30" width="50" height="46" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="125" y="50" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">kruis-</text>
      <text x="125" y="60" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">schakelaar</text>

      {/* wires from cross switch */}
      <line x1="150" y1="40" x2="210" y2="40" stroke="currentColor" strokeWidth={1.5} />
      <line x1="150" y1="68" x2="210" y2="68" stroke="currentColor" strokeWidth={1.5} />

      {/* Switch 3 - wisselschakelaar */}
      <circle cx="215" cy="40" r="3" fill="currentColor" />
      <circle cx="215" cy="68" r="3" fill="currentColor" />
      <circle cx="220" cy="55" r="4" fill="currentColor" />
      <line x1="220" y1="55" x2="215" y2="40" stroke="currentColor" strokeWidth={2} />

      {/* to lamp */}
      <line x1="224" y1="55" x2="270" y2="55" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="280" cy="55" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <line x1="273" y1="48" x2="287" y2="62" stroke="currentColor" strokeWidth={1} />
      <line x1="287" y1="48" x2="273" y2="62" stroke="currentColor" strokeWidth={1} />

      {/* N */}
      <line x1="290" y1="55" x2="320" y2="55" stroke="#1565c0" strokeWidth={2} />
      <text x="320" y="49" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">N</text>

      {/* labels */}
      <text x="45" y="95" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">wissel 1</text>
      <text x="125" y="95" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">kruisschakelaar</text>
      <text x="220" y="95" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">wissel 2</text>

      <text x="170" y="115" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>Bediening vanuit 3+ plaatsen (elke extra = kruisschakelaar)</text>
    </svg>
  ),

  /* 216 — Stopcontact vervangen: stappenplan */
  216: (
    <svg className="kr-esvg" viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Stopcontact vervangen</text>

      {/* Step 1 */}
      <circle cx="35" cy="50" r="14" stroke="#c62828" strokeWidth={2} fill="none" />
      <text x="35" y="54" fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">1</text>
      <text x="35" y="80" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Automaat</text>
      <text x="35" y="89" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">UIT</text>

      <line x1="55" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth={1} markerEnd="url(#arr216)" />

      {/* Step 2 */}
      <circle cx="95" cy="50" r="14" stroke="#c62828" strokeWidth={2} fill="none" />
      <text x="95" y="54" fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">2</text>
      <text x="95" y="80" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Controleer</text>
      <text x="95" y="89" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">spanningsloos</text>

      <line x1="115" y1="50" x2="135" y2="50" stroke="currentColor" strokeWidth={1} markerEnd="url(#arr216)" />

      {/* Step 3 */}
      <circle cx="155" cy="50" r="14" stroke="currentColor" strokeWidth={2} fill="none" />
      <text x="155" y="54" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">3</text>
      <text x="155" y="80" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Afdekraam</text>
      <text x="155" y="89" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">verwijderen</text>

      <line x1="175" y1="50" x2="195" y2="50" stroke="currentColor" strokeWidth={1} markerEnd="url(#arr216)" />

      {/* Step 4 */}
      <circle cx="215" cy="50" r="14" stroke="currentColor" strokeWidth={2} fill="none" />
      <text x="215" y="54" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">4</text>
      <text x="215" y="80" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Aansluiten</text>
      <text x="215" y="89" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">L / N / PE</text>

      <line x1="235" y1="50" x2="255" y2="50" stroke="currentColor" strokeWidth={1} markerEnd="url(#arr216)" />

      {/* Step 5 */}
      <circle cx="275" cy="50" r="14" stroke="#2e7d32" strokeWidth={2} fill="none" />
      <text x="275" y="54" fontSize={10} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">5</text>
      <text x="275" y="80" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Automaat</text>
      <text x="275" y="89" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">AAN + test</text>

      {/* wire colors reminder */}
      <line x1="70" y1="110" x2="85" y2="110" stroke="#8B4513" strokeWidth={3} />
      <text x="90" y="113" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">L</text>
      <line x1="110" y1="110" x2="125" y2="110" stroke="#1565c0" strokeWidth={3} />
      <text x="130" y="113" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">N</text>
      <line x1="150" y1="110" x2="165" y2="110" stroke="#2e7d32" strokeWidth={3} />
      <text x="170" y="113" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">PE</text>

      <defs>
        <marker id="arr216" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  ),

  /* 218 — Aardlek springt: systematisch zoeken */
  218: (
    <svg className="kr-esvg" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Aardlek springt: zoekschema</text>

      {/* RCD at top */}
      <rect x="115" y="25" width="70" height="22" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="150" y="40" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">ALS 30 mA</text>

      <line x1="150" y1="47" x2="150" y2="55" stroke="currentColor" strokeWidth={1.5} />

      {/* Step 1: all off */}
      <rect x="30" y="55" width="240" height="20" rx="3" stroke="currentColor" strokeWidth={1} fill="none" />
      <text x="150" y="69" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1. Alle automaten UIT, aardlek inschakelen</text>

      <line x1="150" y1="75" x2="150" y2="83" stroke="currentColor" strokeWidth={1} markerEnd="url(#arr218)" />

      {/* Step 2: one by one */}
      <rect x="30" y="83" width="240" height="20" rx="3" stroke="currentColor" strokeWidth={1} fill="none" />
      <text x="150" y="97" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">2. Automaten EEN VOOR EEN inschakelen</text>

      <line x1="150" y1="103" x2="150" y2="111" stroke="currentColor" strokeWidth={1} markerEnd="url(#arr218)" />

      {/* Step 3: found it */}
      <rect x="30" y="111" width="240" height="20" rx="3" stroke="#c62828" strokeWidth={1.5} fill="none" />
      <text x="150" y="125" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">3. Aardlek valt uit → die groep heeft het fout</text>

      <line x1="150" y1="131" x2="150" y2="139" stroke="currentColor" strokeWidth={1} markerEnd="url(#arr218)" />

      {/* Step 4: disconnect loads */}
      <rect x="30" y="139" width="240" height="20" rx="3" stroke="#2e7d32" strokeWidth={1.5} fill="none" />
      <text x="150" y="153" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">4. Apparaten op die groep loskoppelen en herhalen</text>

      <defs>
        <marker id="arr218" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  ),

  /* 239 — Wat is een fase: sinusgolf */
  239: (
    <svg className="kr-esvg" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Wisselspanning: sinusvorm</text>

      {/* axes */}
      <line x1="30" y1="75" x2="280" y2="75" stroke="currentColor" strokeWidth={1} />
      <line x1="30" y1="25" x2="30" y2="125" stroke="currentColor" strokeWidth={1} />

      {/* Y labels */}
      <text x="18" y="35" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">+325 V</text>
      <text x="18" y="78" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">0</text>
      <text x="18" y="122" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">−325 V</text>

      {/* sine wave */}
      <path d="M30,75 C55,25 80,25 105,75 C130,125 155,125 180,75 C205,25 230,25 255,75" stroke="#c62828" strokeWidth={2} fill="none" />

      {/* period markers */}
      <line x1="30" y1="128" x2="30" y2="132" stroke="currentColor" strokeWidth={1} />
      <line x1="180" y1="128" x2="180" y2="132" stroke="currentColor" strokeWidth={1} />
      <text x="30" y="140" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">0 ms</text>
      <text x="180" y="140" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">20 ms</text>

      {/* period bracket */}
      <line x1="30" y1="130" x2="180" y2="130" stroke="currentColor" strokeWidth={1} />
      <text x="105" y="140" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1 periode = 20 ms</text>

      {/* Veff annotation */}
      <line x1="260" y1="44" x2="280" y2="44" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 2" />
      <text x="270" y="55" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Veff</text>
      <text x="270" y="64" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">230 V</text>
    </svg>
  ),

  /* 240 — 3-fase 400 V: drie sinusgolven 120 graden apart */
  240: (
    <svg className="kr-esvg" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
      <text x="160" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Driefasig: 3 × 230 V, 120° verschoven</text>

      {/* axes */}
      <line x1="30" y1="80" x2="300" y2="80" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 2" />
      <line x1="30" y1="30" x2="30" y2="130" stroke="currentColor" strokeWidth={1} />

      {/* L1 sine - red */}
      <path d="M30,80 C50,35 70,35 90,80 C110,125 130,125 150,80 C170,35 190,35 210,80 C230,125 250,125 270,80" stroke="#c62828" strokeWidth={2} fill="none" />

      {/* L2 sine - green, shifted 120° */}
      <path d="M30,108 C50,125 70,115 90,62 C110,25 130,40 150,95 C170,130 190,115 210,62 C230,25 250,40 270,95" stroke="#2e7d32" strokeWidth={2} fill="none" />

      {/* L3 sine - blue, shifted 240° */}
      <path d="M30,52 C50,25 70,50 90,98 C110,130 130,110 150,55 C170,25 190,50 210,98 C230,130 250,110 270,55" stroke="#1565c0" strokeWidth={2} fill="none" />

      {/* legend */}
      <line x1="60" y1="145" x2="80" y2="145" stroke="#c62828" strokeWidth={2} />
      <text x="85" y="148" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">L1</text>

      <line x1="115" y1="145" x2="135" y2="145" stroke="#2e7d32" strokeWidth={2} />
      <text x="140" y="148" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif">L2</text>

      <line x1="170" y1="145" x2="190" y2="145" stroke="#1565c0" strokeWidth={2} />
      <text x="195" y="148" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">L3</text>

      {/* voltage annotation */}
      <text x="280" y="50" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">L-N: 230 V</text>
      <text x="280" y="62" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">L-L: 400 V</text>
      <text x="280" y="74" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">(230×√3)</text>
    </svg>
  ),

  /* 241 — Nulstroom: vectordiagram */
  241: (
    <svg className="kr-esvg" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Nulstroom: vectordiagram</text>

      {/* center point */}
      <circle cx="130" cy="90" r="2" fill="currentColor" />

      {/* L1 vector - up-right (0°) */}
      <line x1="130" y1="90" x2="200" y2="50" stroke="#c62828" strokeWidth={2} markerEnd="url(#arr241r)" />
      <text x="210" y="48" fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">I₁</text>

      {/* L2 vector - down-left (120°) */}
      <line x1="130" y1="90" x2="70" y2="125" stroke="#2e7d32" strokeWidth={2} markerEnd="url(#arr241g)" />
      <text x="55" y="133" fontSize={9} fill="#2e7d32" fontFamily="system-ui, sans-serif">I₂</text>

      {/* L3 vector - up-left (240°) */}
      <line x1="130" y1="90" x2="80" y2="50" stroke="#1565c0" strokeWidth={2} markerEnd="url(#arr241b)" />
      <text x="65" y="48" fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">I₃</text>

      {/* angle arcs */}
      <path d="M155,78 A30,30 0 0,1 115,73" stroke="currentColor" strokeWidth={0.5} fill="none" />
      <text x="128" y="68" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">120°</text>

      {/* sum = 0 */}
      <text x="230" y="90" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" fontWeight="bold">I₁ + I₂ + I₃ = 0</text>
      <text x="230" y="105" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">→ IN = 0 A</text>
      <text x="230" y="120" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" opacity={0.6}>bij symmetrische</text>
      <text x="230" y="130" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" opacity={0.6}>belasting</text>

      <defs>
        <marker id="arr241r" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c62828" />
        </marker>
        <marker id="arr241g" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="#2e7d32" />
        </marker>
        <marker id="arr241b" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1565c0" />
        </marker>
      </defs>
    </svg>
  ),

  /* 242 — 2-fase (perilex): twee fasen uit driefasig */
  242: (
    <svg className="kr-esvg" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">2-fase aansluiting (perilex)</text>

      {/* 3-phase bus */}
      <line x1="30" y1="40" x2="30" y2="120" stroke="currentColor" strokeWidth={2} />
      <text x="15" y="40" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">bus</text>

      {/* L1 */}
      <line x1="30" y1="45" x2="80" y2="45" stroke="#c62828" strokeWidth={2} />
      <circle cx="30" cy="45" r="3" fill="#c62828" />
      <text x="55" y="40" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">L1</text>

      {/* L2 */}
      <line x1="30" y1="70" x2="80" y2="70" stroke="#2e7d32" strokeWidth={2} />
      <circle cx="30" cy="70" r="3" fill="#2e7d32" />
      <text x="55" y="65" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">L2</text>

      {/* L3 - not used, greyed */}
      <circle cx="30" cy="95" r="3" fill="#999" />
      <text x="55" y="99" fontSize={8} fill="#999" fontFamily="system-ui, sans-serif" textAnchor="middle">L3 (niet gebruikt)</text>

      {/* N */}
      <line x1="30" y1="115" x2="80" y2="115" stroke="#1565c0" strokeWidth={2} />
      <circle cx="30" cy="115" r="3" fill="#1565c0" />
      <text x="55" y="128" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">N</text>

      {/* to perilex */}
      <line x1="80" y1="45" x2="180" y2="60" stroke="#c62828" strokeWidth={1.5} />
      <line x1="80" y1="70" x2="180" y2="70" stroke="#2e7d32" strokeWidth={1.5} />
      <line x1="80" y1="115" x2="180" y2="90" stroke="#1565c0" strokeWidth={1.5} />

      {/* perilex block */}
      <rect x="180" y="50" width="80" height="50" rx="5" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="220" y="72" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Perilex</text>
      <text x="220" y="85" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">(kookplaat)</text>

      {/* voltage labels */}
      <text x="140" y="50" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">230 V</text>
      <text x="140" y="84" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">230 V</text>

      {/* 400V between phases */}
      <line x1="85" y1="45" x2="85" y2="70" stroke="currentColor" strokeWidth={0.5} strokeDasharray="2 2" />
      <text x="98" y="60" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" fontWeight="bold">400 V</text>
    </svg>
  ),

  /* 243 — Aansluitwaarden */
  243: (
    <svg className="kr-esvg" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Aansluitwaarden</text>

      {/* 1-fase */}
      <rect x="20" y="30" width="120" height="70" rx="5" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="80" y="48" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">1-fase</text>
      <text x="80" y="62" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1 × 25 A</text>
      <text x="80" y="78" fontSize={12} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">5,75 kW</text>
      <text x="80" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>230 V × 25 A</text>

      {/* 3-fase */}
      <rect x="160" y="30" width="120" height="70" rx="5" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="220" y="48" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">3-fase</text>
      <text x="220" y="62" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">3 × 25 A</text>
      <text x="220" y="78" fontSize={12} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">17,3 kW</text>
      <text x="220" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>3 × 230 V × 25 A</text>

      {/* multiplier */}
      <text x="150" y="70" fontSize={14} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">×3</text>

      <text x="150" y="115" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>Typische woningaansluiting; waarde staat op hoofdzekering</text>
    </svg>
  ),

  /* 245 — Krachtstroom: 5-pin CEE connector */
  245: (
    <svg className="kr-esvg" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">CEE 5-polig (krachtstroom)</text>

      {/* connector body */}
      <circle cx="130" cy="85" r="48" stroke="currentColor" strokeWidth={2} fill="none" />

      {/* key notch at top */}
      <rect x="119" y="35" width="22" height="6" rx="2" stroke="currentColor" strokeWidth={1} fill="currentColor" fillOpacity={0.1} />
      <text x="130" y="32" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">6h</text>

      {/* L1 pin */}
      <circle cx="105" cy="65" r="6" stroke="#c62828" strokeWidth={2} fill="none" />
      <text x="105" y="68" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">L1</text>

      {/* L2 pin */}
      <circle cx="155" cy="65" r="6" stroke="#2e7d32" strokeWidth={2} fill="none" />
      <text x="155" y="68" fontSize={7} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">L2</text>

      {/* L3 pin */}
      <circle cx="155" cy="100" r="6" stroke="#1565c0" strokeWidth={2} fill="none" />
      <text x="155" y="103" fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">L3</text>

      {/* N pin */}
      <circle cx="105" cy="100" r="6" stroke="#666" strokeWidth={2} fill="none" />
      <text x="105" y="103" fontSize={7} fill="#666" fontFamily="system-ui, sans-serif" textAnchor="middle">N</text>

      {/* PE pin - larger, center bottom */}
      <circle cx="130" cy="115" r="8" stroke="#2e7d32" strokeWidth={2} fill="none" />
      <text x="130" y="118" fontSize={7} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">PE</text>

      {/* Labels */}
      <text x="240" y="55" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">L1 = fase 1</text>
      <text x="240" y="68" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif">L2 = fase 2</text>
      <text x="240" y="81" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">L3 = fase 3</text>
      <text x="240" y="94" fontSize={8} fill="#666" fontFamily="system-ui, sans-serif">N = nul</text>
      <text x="240" y="107" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif">PE = aarde</text>

      <text x="150" y="148" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">400 V (3-fase + N + PE)</text>
      <text x="150" y="158" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>rode behuizing (400 V) / blauwe behuizing (230 V = 3-polig)</text>
    </svg>
  ),

  /* 246 — Ster- vs driehoekschakeling */
  246: (
    <svg className="kr-esvg" viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Sterschakeling vs Driehoekschakeling</text>

      {/* STAR configuration */}
      <text x="85" y="32" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Ster (Y)</text>

      {/* center point */}
      <circle cx="85" cy="90" r="3" fill="currentColor" />
      <text x="95" y="95" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">N</text>

      {/* L1 - up */}
      <line x1="85" y1="87" x2="85" y2="45" stroke="#c62828" strokeWidth={2} />
      <text x="85" y="42" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">L1</text>
      {/* impedance block */}
      <rect x="78" y="55" width="14" height="20" rx="2" stroke="#c62828" strokeWidth={1} fill="none" />

      {/* L2 - bottom-left */}
      <line x1="83" y1="92" x2="50" y2="130" stroke="#2e7d32" strokeWidth={2} />
      <text x="40" y="138" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">L2</text>
      <rect x="58" y="105" width="14" height="20" rx="2" stroke="#2e7d32" strokeWidth={1} fill="none" transform="rotate(-55,65,115)" />

      {/* L3 - bottom-right */}
      <line x1="87" y1="92" x2="120" y2="130" stroke="#1565c0" strokeWidth={2} />
      <text x="130" y="138" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">L3</text>
      <rect x="98" y="105" width="14" height="20" rx="2" stroke="#1565c0" strokeWidth={1} fill="none" transform="rotate(55,105,115)" />

      {/* star voltage */}
      <text x="85" y="155" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">UL = 230 V, ULL = 400 V</text>

      {/* separator */}
      <line x1="170" y1="30" x2="170" y2="150" stroke="currentColor" strokeWidth={0.5} strokeDasharray="3 3" />

      {/* DELTA configuration */}
      <text x="255" y="32" fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Driehoek (Δ)</text>

      {/* triangle */}
      <line x1="255" y1="48" x2="210" y2="125" stroke="#c62828" strokeWidth={2} />
      <line x1="210" y1="125" x2="300" y2="125" stroke="#2e7d32" strokeWidth={2} />
      <line x1="300" y1="125" x2="255" y2="48" stroke="#1565c0" strokeWidth={2} />

      {/* impedance blocks on sides */}
      <rect x="225" y="75" width="14" height="20" rx="2" stroke="#c62828" strokeWidth={1} fill="none" transform="rotate(-60,232,85)" />
      <rect x="248" y="118" width="14" height="20" rx="2" stroke="#2e7d32" strokeWidth={1} fill="none" transform="rotate(0,255,128)" />
      <rect x="270" y="75" width="14" height="20" rx="2" stroke="#1565c0" strokeWidth={1} fill="none" transform="rotate(60,277,85)" />

      {/* labels */}
      <text x="255" y="42" fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">L1</text>
      <text x="200" y="133" fontSize={8} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">L2</text>
      <text x="310" y="133" fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">L3</text>

      {/* delta voltage */}
      <text x="255" y="155" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Uspoel = ULL = 400 V</text>
    </svg>
  ),

  /* 251 — Netfrequentie 50 Hz */
  251: (
    <svg className="kr-esvg" viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Netfrequentie: 50 Hz</text>

      {/* axis */}
      <line x1="30" y1="70" x2="280" y2="70" stroke="currentColor" strokeWidth={1} />
      <line x1="30" y1="25" x2="30" y2="115" stroke="currentColor" strokeWidth={1} />

      {/* one full cycle highlighted */}
      <rect x="30" y="25" width="120" height="90" rx="0" fill="currentColor" fillOpacity={0.04} stroke="none" />

      {/* sine wave - multiple cycles */}
      <path d="M30,70 C45,30 60,30 75,70 C90,110 105,110 120,70 C135,30 150,30 165,70 C180,110 195,110 210,70 C225,30 240,30 255,70" stroke="#c62828" strokeWidth={2} fill="none" />

      {/* period = 20 ms */}
      <line x1="30" y1="120" x2="150" y2="120" stroke="currentColor" strokeWidth={1.5} />
      <line x1="30" y1="116" x2="30" y2="124" stroke="currentColor" strokeWidth={1} />
      <line x1="150" y1="116" x2="150" y2="124" stroke="currentColor" strokeWidth={1} />
      <text x="90" y="129" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">T = 20 ms</text>

      {/* formula */}
      <text x="240" y="110" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">f = 1/T</text>
      <text x="240" y="122" fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">= 1/0,02 s</text>
      <text x="240" y="128" fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">= 50 Hz</text>

      {/* time axis label */}
      <text x="270" y="65" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">t (ms)</text>
      <text x="150" y="67" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">20</text>
      <text x="270" y="76" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">40</text>
    </svg>
  ),

  /* 252 — Hoogspanning transformatie */
  252: (
    <svg className="kr-esvg" viewBox="0 0 340 110" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Spanningspad: centrale → huis</text>

      {/* Power plant */}
      <rect x="5" y="30" width="50" height="30" rx="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="30" y="43" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Centrale</text>
      <text x="30" y="53" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">10-25 kV</text>

      {/* step-up trafo */}
      <line x1="55" y1="45" x2="75" y2="45" stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arr252)" />
      <circle cx="83" cy="40" r="7" stroke="currentColor" strokeWidth={1} fill="none" />
      <circle cx="83" cy="50" r="7" stroke="currentColor" strokeWidth={1} fill="none" />

      {/* 150 kV / 380 kV line */}
      <line x1="90" y1="45" x2="140" y2="45" stroke="#c62828" strokeWidth={2.5} />
      <text x="115" y="38" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">150-380 kV</text>
      <text x="115" y="62" fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>hoogspanningsnet</text>

      {/* step-down trafo 1 */}
      <circle cx="148" cy="40" r="7" stroke="currentColor" strokeWidth={1} fill="none" />
      <circle cx="148" cy="50" r="7" stroke="currentColor" strokeWidth={1} fill="none" />
      <line x1="155" y1="45" x2="170" y2="45" stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arr252)" />

      {/* 10 kV line */}
      <line x1="175" y1="45" x2="215" y2="45" stroke="#e65100" strokeWidth={2} />
      <text x="195" y="38" fontSize={7} fill="#e65100" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">10 kV</text>
      <text x="195" y="62" fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>middenspanning</text>

      {/* step-down trafo 2 */}
      <circle cx="223" cy="40" r="7" stroke="currentColor" strokeWidth={1} fill="none" />
      <circle cx="223" cy="50" r="7" stroke="currentColor" strokeWidth={1} fill="none" />
      <line x1="230" y1="45" x2="245" y2="45" stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arr252)" />

      {/* 400/230 V */}
      <line x1="250" y1="45" x2="280" y2="45" stroke="#2e7d32" strokeWidth={2} />
      <text x="265" y="38" fontSize={7} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">400/230 V</text>
      <text x="265" y="62" fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>laagspanning</text>

      {/* house */}
      <path d="M290,30 L305,22 L320,30 L320,55 L290,55 Z" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x="305" y="48" fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">huis</text>
      <line x1="280" y1="45" x2="290" y2="45" stroke="#2e7d32" strokeWidth={1.5} />

      {/* bottom note */}
      <text x="170" y="80" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>Wijktransformatorhuisje: 10 kV → 400/230 V</text>
      <text x="170" y="92" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" opacity={0.6}>Hogere spanning = lagere stroom = dunner kabel = minder verlies</text>

      <defs>
        <marker id="arr252" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  ),

  /* 220 — Inspectie: visuele checkpunten */
  220: (
    <svg className="kr-esvg" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="15" fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Visuele inspectie: checkpunten</text>

      {/* checklist items */}
      {[
        { y: 35, t: "Beschadigde isolatie?" },
        { y: 55, t: "Verkleuring door warmte?" },
        { y: 75, t: "Losse klemmen / draden?" },
        { y: 95, t: "Aardlekschakelaar test-knop?" },
        { y: 115, t: "Juiste automaat-waarden?" },
        { y: 135, t: "Alle deksels aanwezig?" },
      ].map((item, i) => (
        <g key={i}>
          <rect x="30" y={item.y - 10} width="12" height="12" rx="2" stroke="currentColor" strokeWidth={1.5} fill="none" />
          <text x="50" y={item.y} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">{item.t}</text>
        </g>
      ))}

      {/* warning icon */}
      <text x="260" y="50" fontSize={20} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">⚠</text>
      <text x="260" y="70" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Signaleer</text>
      <text x="260" y="80" fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">afwijkingen</text>
      <text x="260" y="95" fontSize={7} fill="#2e7d32" fontFamily="system-ui, sans-serif" textAnchor="middle">✓ = OK</text>
      <text x="260" y="108" fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">✗ = actie</text>
    </svg>
  ),
}
