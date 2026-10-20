import type { ReactNode } from 'react'

export const SCHEMAS2: Record<number, ReactNode> = {

  /* ── BASIS (57-68, 50, 52, 53) ────────────────────────────── */

  // 57 Pull-up / pull-down
  57: (
    <svg viewBox="0 0 280 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      {/* Pull-up */}
      <text x={70} y={12} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Pull-up</text>
      <text x={70} y={28} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">VCC</text>
      <line x1={70} y1={30} x2={70} y2={40} />
      {/* resistor */}
      <rect x={62} y={40} width={16} height={36} />
      <line x1={70} y1={76} x2={70} y2={90} />
      <circle cx={70} cy={90} r={3} fill="currentColor" />
      <line x1={70} y1={90} x2={40} y2={90} />
      <text x={36} y={94} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">IN</text>
      <line x1={70} y1={90} x2={70} y2={110} />
      <text x={70} y={124} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">IC-pin</text>

      {/* Pull-down */}
      <text x={210} y={12} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Pull-down</text>
      <line x1={210} y1={20} x2={210} y2={40} />
      <text x={210} y={38} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">IC-pin</text>
      <circle cx={210} cy={50} r={3} fill="currentColor" />
      <line x1={210} y1={50} x2={180} y2={50} />
      <text x={176} y={54} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">IN</text>
      <line x1={210} y1={53} x2={210} y2={64} />
      <rect x={202} y={64} width={16} height={36} />
      <line x1={210} y1={100} x2={210} y2={115} />
      <line x1={200} y1={115} x2={220} y2={115} />
      <line x1={203} y1={119} x2={217} y2={119} />
      <line x1={206} y1={123} x2={214} y2={123} />
      <text x={210} y={136} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">GND</text>
    </svg>
  ),

  // 58 Logische poorten
  58: (
    <svg viewBox="0 0 280 120" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      {/* NOT gate */}
      <text x={46} y={12} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">NOT</text>
      <line x1={10} y1={40} x2={26} y2={40} />
      <polygon points="26,25 26,55 60,40" />
      <circle cx={64} cy={40} r={4} />
      <line x1={68} y1={40} x2={82} y2={40} />
      <text x={14} y={54} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">A</text>
      <text x={72} y={54} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">A&#x305;</text>

      {/* AND gate */}
      <text x={148} y={12} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">AND</text>
      <line x1={110} y1={32} x2={126} y2={32} />
      <line x1={110} y1={48} x2={126} y2={48} />
      <path d="M126,20 L126,60 Q160,60 160,40 Q160,20 126,20 Z" />
      <line x1={160} y1={40} x2={176} y2={40} />
      <text x={114} y={30} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">A</text>
      <text x={114} y={58} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">B</text>

      {/* OR gate */}
      <text x={240} y={12} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">OR</text>
      <line x1={200} y1={32} x2={216} y2={32} />
      <line x1={200} y1={48} x2={216} y2={48} />
      <path d="M212,20 Q220,40 212,60 Q240,60 252,40 Q240,20 212,20 Z" />
      <line x1={252} y1={40} x2={268} y2={40} />
      <text x={204} y={30} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">A</text>
      <text x={204} y={58} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">B</text>

      {/* Truth table hints */}
      <text x={140} y={80} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">NOT: Y = A&#x305;   AND: Y = A&#xB7;B   OR: Y = A+B</text>
    </svg>
  ),

  // 59 555-timer astable
  59: (
    <svg viewBox="0 0 300 180" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={150} y={14} fontSize={11} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">555 Astable</text>
      {/* 555 IC block */}
      <rect x={110} y={40} width={80} height={90} />
      <text x={150} y={90} fontSize={12} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">555</text>
      {/* Pins */}
      <text x={107} y={58} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">8 VCC</text>
      <text x={107} y={78} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">7 DIS</text>
      <text x={107} y={98} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">6 THR</text>
      <text x={107} y={118} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">2 TRI</text>
      <text x={193} y={58} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">4 RST</text>
      <text x={193} y={78} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">3 OUT</text>
      <text x={193} y={118} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">1 GND</text>
      {/* VCC rail */}
      <line x1={80} y1={55} x2={110} y2={55} />
      <line x1={80} y1={25} x2={80} y2={55} />
      <text x={80} y={22} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">VCC</text>
      {/* R1 */}
      <line x1={80} y1={40} x2={80} y2={50} />
      <rect x={72} y={50} width={16} height={24} />
      <text x={66} y={66} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">R1</text>
      <line x1={80} y1={74} x2={80} y2={78} />
      <circle cx={80} cy={75} r={2} fill="currentColor" />
      <line x1={80} y1={75} x2={110} y2={75} />
      {/* R2 */}
      <rect x={72} y={80} width={16} height={24} />
      <text x={66} y={96} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">R2</text>
      <line x1={80} y1={104} x2={80} y2={110} />
      <circle cx={80} cy={110} r={2} fill="currentColor" />
      <line x1={80} y1={110} x2={110} y2={110} />
      <line x1={80} y1={95} x2={110} y2={95} />
      {/* C */}
      <line x1={80} y1={110} x2={80} y2={130} />
      <line x1={72} y1={130} x2={88} y2={130} />
      <line x1={72} y1={135} x2={88} y2={135} />
      <line x1={80} y1={135} x2={80} y2={155} />
      <text x={66} y={136} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">C</text>
      {/* GND */}
      <line x1={80} y1={155} x2={190} y2={155} />
      <line x1={190} y1={115} x2={190} y2={155} />
      {/* Output */}
      <line x1={190} y1={75} x2={240} y2={75} />
      <text x={244} y={79} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">OUT</text>
      {/* RST to VCC */}
      <line x1={190} y1={55} x2={210} y2={55} />
      <line x1={210} y1={25} x2={210} y2={55} />
      <line x1={80} y1={25} x2={210} y2={25} />
      {/* GND symbol */}
      <line x1={130} y1={155} x2={130} y2={165} />
      <line x1={122} y1={165} x2={138} y2={165} />
      <line x1={125} y1={168} x2={135} y2={168} />
      <line x1={128} y1={171} x2={132} y2={171} />
    </svg>
  ),

  // 60 Opamp symbool
  60: (
    <svg viewBox="0 0 280 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={11} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Operationele versterker</text>
      {/* Triangle */}
      <polygon points="80,30 80,110 200,70" />
      {/* Inputs */}
      <line x1={40} y1={50} x2={80} y2={50} />
      <text x={88} y={54} fontSize={12} fill="currentColor" fontFamily="system-ui, sans-serif">+</text>
      <line x1={40} y1={90} x2={80} y2={90} />
      <text x={88} y={94} fontSize={14} fill="currentColor" fontFamily="system-ui, sans-serif">{'−'}</text>
      {/* Output */}
      <line x1={200} y1={70} x2={240} y2={70} />
      {/* Labels */}
      <text x={36} y={54} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">V+</text>
      <text x={36} y={94} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">V{'−'}</text>
      <text x={244} y={74} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">Vout</text>
      {/* Supply */}
      <line x1={140} y1={44} x2={140} y2={26} />
      <text x={140} y={22} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">V+</text>
      <line x1={140} y1={96} x2={140} y2={114} />
      <text x={140} y={124} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">V{'−'}</text>
      <text x={140} y={136} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Vout = A(V+ {'−'} V{'−'})</text>
    </svg>
  ),

  // 61 Niet-inverterende versterker
  61: (
    <svg viewBox="0 0 300 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={150} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Niet-inverterende versterker</text>
      {/* Opamp triangle */}
      <polygon points="100,40 100,120 200,80" />
      <text x={108} y={64} fontSize={12} fill="currentColor" fontFamily="system-ui, sans-serif">+</text>
      <text x={108} y={104} fontSize={14} fill="currentColor" fontFamily="system-ui, sans-serif">{'−'}</text>
      {/* Non-inv input */}
      <line x1={40} y1={60} x2={100} y2={60} />
      <text x={36} y={64} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">Vin</text>
      {/* Inv input */}
      <line x1={70} y1={100} x2={100} y2={100} />
      {/* Output */}
      <line x1={200} y1={80} x2={260} y2={80} />
      <text x={264} y={84} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">Vout</text>
      {/* Feedback R2 */}
      <line x1={230} y1={80} x2={230} y2={130} />
      <line x1={230} y1={130} x2={70} y2={130} />
      <line x1={70} y1={100} x2={70} y2={130} />
      <circle cx={230} cy={80} r={2} fill="currentColor" />
      <circle cx={70} cy={130} r={2} fill="currentColor" />
      {/* R2 on feedback */}
      <rect x={140} y={122} width={40} height={16} />
      <text x={160} y={120} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R2</text>
      {/* R1 to GND */}
      <line x1={70} y1={130} x2={70} y2={140} />
      <rect x={62} y={140} width={16} height={12} />
      <text x={58} y={150} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">R1</text>
      <line x1={70} y1={152} x2={70} y2={156} />
      <line x1={62} y1={156} x2={78} y2={156} />
      {/* Formula */}
      <text x={240} y={110} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">A = 1 + R2/R1</text>
    </svg>
  ),

  // 62 Comparator
  62: (
    <svg viewBox="0 0 300 150" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={150} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Comparator</text>
      {/* Opamp */}
      <polygon points="100,35 100,115 200,75" />
      <text x={108} y={59} fontSize={12} fill="currentColor" fontFamily="system-ui, sans-serif">+</text>
      <text x={108} y={99} fontSize={14} fill="currentColor" fontFamily="system-ui, sans-serif">{'−'}</text>
      {/* Vin */}
      <line x1={40} y1={55} x2={100} y2={55} />
      <text x={36} y={59} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">Vin</text>
      {/* Vref */}
      <line x1={40} y1={95} x2={100} y2={95} />
      <text x={36} y={99} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="end">Vref</text>
      {/* Vref divider */}
      <line x1={30} y1={40} x2={30} y2={50} />
      <text x={30} y={37} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">VCC</text>
      <rect x={22} y={50} width={16} height={16} />
      <line x1={30} y1={66} x2={30} y2={76} />
      <circle cx={30} cy={76} r={2} fill="currentColor" />
      <line x1={30} y1={76} x2={30} y2={86} />
      <rect x={22} y={86} width={16} height={16} />
      <line x1={30} y1={102} x2={30} y2={112} />
      <line x1={22} y1={112} x2={38} y2={112} />
      <line x1={30} y1={76} x2={40} y2={76} />
      <line x1={40} y1={76} x2={40} y2={95} />
      {/* Output */}
      <line x1={200} y1={75} x2={260} y2={75} />
      <text x={264} y={79} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">Vout</text>
      {/* Annotation */}
      <text x={150} y={140} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Vin &gt; Vref → Vout = HIGH</text>
    </svg>
  ),

  // 63 7805 regelaar
  63: (
    <svg viewBox="0 0 300 150" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={150} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">7805 Spanningsregelaar</text>
      {/* 7805 block */}
      <rect x={105} y={40} width={90} height={50} rx={4} />
      <text x={150} y={70} fontSize={11} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">7805</text>
      {/* Pins */}
      <line x1={70} y1={55} x2={105} y2={55} />
      <text x={110} y={52} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">IN</text>
      <line x1={195} y1={55} x2={240} y2={55} />
      <text x={183} y={52} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">OUT</text>
      <line x1={150} y1={90} x2={150} y2={120} />
      <text x={150} y={100} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">GND</text>
      {/* Input cap */}
      <line x1={70} y1={55} x2={70} y2={75} />
      <line x1={62} y1={75} x2={78} y2={75} />
      <line x1={62} y1={80} x2={78} y2={80} />
      <line x1={70} y1={80} x2={70} y2={120} />
      <text x={56} y={80} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">330nF</text>
      {/* Output cap */}
      <line x1={240} y1={55} x2={240} y2={75} />
      <line x1={232} y1={75} x2={248} y2={75} />
      <line x1={232} y1={80} x2={248} y2={80} />
      <line x1={240} y1={80} x2={240} y2={120} />
      <text x={254} y={80} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">100nF</text>
      {/* GND rail */}
      <line x1={70} y1={120} x2={240} y2={120} />
      <line x1={140} y1={120} x2={160} y2={120} />
      <line x1={143} y1={124} x2={157} y2={124} />
      <line x1={146} y1={128} x2={154} y2={128} />
      {/* Voltage labels */}
      <text x={50} y={50} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">7-35V</text>
      <text x={244} y={50} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">5V</text>
    </svg>
  ),

  // 64 PWM
  64: (
    <svg viewBox="0 0 280 130" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">PWM (Pulse Width Modulation)</text>
      {/* Axis */}
      <line x1={30} y1={100} x2={260} y2={100} />
      <line x1={30} y1={30} x2={30} y2={100} />
      <text x={26} y={38} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="end">V</text>
      <text x={260} y={112} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">t</text>
      {/* 25% duty */}
      <polyline points="40,100 40,40 70,40 70,100 110,100 110,40 140,40 140,100" strokeWidth={2} stroke="#c62828" />
      <line x1={40} y1={108} x2={110} y2={108} strokeDasharray="3,2" />
      <text x={75} y={118} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">T</text>
      {/* Duty cycle marker */}
      <line x1={40} y1={34} x2={70} y2={34} stroke="#1565c0" strokeWidth={2} />
      <text x={55} y={30} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">ton</text>
      {/* 75% duty */}
      <polyline points="160,100 160,40 230,40 230,100 250,100 250,40 270,40" strokeWidth={2} />
      <text x={80} y={126} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">~43% duty</text>
      <text x={215} y={126} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">~78% duty</text>
      <text x={140} y={60} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">D = ton / T</text>
    </svg>
  ),

  // 65 Buck converter
  65: (
    <svg viewBox="0 0 320 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={160} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Buck Converter (step-down)</text>
      {/* Vin */}
      <text x={20} y={48} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">Vin</text>
      <line x1={40} y1={50} x2={70} y2={50} />
      {/* Switch (MOSFET symbol simplified) */}
      <rect x={70} y={38} width={30} height={24} rx={3} />
      <text x={85} y={54} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">SW</text>
      <line x1={100} y1={50} x2={130} y2={50} />
      {/* Inductor */}
      <path d="M130,50 Q140,35 150,50 Q160,35 170,50 Q180,35 190,50" />
      <text x={160} y={38} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">L</text>
      <line x1={190} y1={50} x2={240} y2={50} />
      {/* Output cap */}
      <line x1={240} y1={50} x2={240} y2={65} />
      <line x1={232} y1={65} x2={248} y2={65} />
      <line x1={232} y1={70} x2={248} y2={70} />
      <line x1={240} y1={70} x2={240} y2={130} />
      <text x={252} y={70} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      {/* Load */}
      <line x1={240} y1={50} x2={280} y2={50} />
      <text x={284} y={54} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">Vout</text>
      {/* Diode */}
      <line x1={130} y1={50} x2={130} y2={80} />
      <polygon points="120,100 140,100 130,80" fill="none" />
      <line x1={120} y1={80} x2={140} y2={80} />
      <line x1={130} y1={100} x2={130} y2={130} />
      <text x={116} y={94} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">D</text>
      <circle cx={130} cy={50} r={2} fill="currentColor" />
      {/* GND */}
      <line x1={40} y1={130} x2={280} y2={130} />
      <line x1={40} y1={50} x2={40} y2={130} />
      <line x1={280} y1={50} x2={280} y2={130} />
      <line x1={155} y1={130} x2={155} y2={140} />
      <line x1={147} y1={140} x2={163} y2={140} />
      <line x1={150} y1={143} x2={160} y2={143} />
      <line x1={153} y1={146} x2={157} y2={146} />
    </svg>
  ),

  // 66 Boost converter
  66: (
    <svg viewBox="0 0 320 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={160} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Boost Converter (step-up)</text>
      {/* Vin */}
      <text x={20} y={48} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">Vin</text>
      <line x1={40} y1={50} x2={60} y2={50} />
      {/* Inductor first */}
      <path d="M60,50 Q70,35 80,50 Q90,35 100,50 Q110,35 120,50" />
      <text x={90} y={38} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">L</text>
      <line x1={120} y1={50} x2={150} y2={50} />
      <circle cx={150} cy={50} r={2} fill="currentColor" />
      {/* Diode to output */}
      <line x1={150} y1={50} x2={170} y2={50} />
      <polygon points="170,42 170,58 190,50" fill="none" />
      <line x1={190} y1={42} x2={190} y2={58} />
      <line x1={190} y1={50} x2={240} y2={50} />
      <text x={180} y={40} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">D</text>
      {/* Switch to GND */}
      <rect x={138} y={70} width={24} height={20} rx={3} />
      <text x={150} y={84} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">SW</text>
      <line x1={150} y1={50} x2={150} y2={70} />
      <line x1={150} y1={90} x2={150} y2={130} />
      {/* Output cap */}
      <line x1={240} y1={50} x2={240} y2={65} />
      <line x1={232} y1={65} x2={248} y2={65} />
      <line x1={232} y1={70} x2={248} y2={70} />
      <line x1={240} y1={70} x2={240} y2={130} />
      <text x={252} y={70} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      {/* Vout */}
      <line x1={240} y1={50} x2={280} y2={50} />
      <text x={284} y={54} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">Vout</text>
      {/* GND */}
      <line x1={40} y1={130} x2={280} y2={130} />
      <line x1={40} y1={50} x2={40} y2={130} />
      <line x1={280} y1={50} x2={280} y2={130} />
    </svg>
  ),

  // 67 H-brug
  67: (
    <svg viewBox="0 0 280 180" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">H-brug</text>
      {/* VCC rail */}
      <line x1={60} y1={30} x2={220} y2={30} />
      <text x={140} y={26} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">VCC</text>
      {/* GND rail */}
      <line x1={60} y1={160} x2={220} y2={160} />
      <text x={140} y={174} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">GND</text>
      {/* S1 top-left */}
      <line x1={80} y1={30} x2={80} y2={50} />
      <rect x={68} y={50} width={24} height={20} rx={3} />
      <text x={80} y={64} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">S1</text>
      <line x1={80} y1={70} x2={80} y2={90} />
      {/* S2 top-right */}
      <line x1={200} y1={30} x2={200} y2={50} />
      <rect x={188} y={50} width={24} height={20} rx={3} />
      <text x={200} y={64} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">S2</text>
      <line x1={200} y1={70} x2={200} y2={90} />
      {/* S3 bottom-left */}
      <line x1={80} y1={100} x2={80} y2={120} />
      <rect x={68} y={120} width={24} height={20} rx={3} />
      <text x={80} y={134} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">S3</text>
      <line x1={80} y1={140} x2={80} y2={160} />
      {/* S4 bottom-right */}
      <line x1={200} y1={100} x2={200} y2={120} />
      <rect x={188} y={120} width={24} height={20} rx={3} />
      <text x={200} y={134} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">S4</text>
      <line x1={200} y1={140} x2={200} y2={160} />
      {/* Motor */}
      <line x1={80} y1={95} x2={120} y2={95} />
      <circle cx={140} cy={95} r={18} />
      <text x={140} y={99} fontSize={12} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">M</text>
      <line x1={158} y1={95} x2={200} y2={95} />
      {/* Direction arrows */}
      <text x={140} y={45} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">S1+S4 aan → rechts</text>
      <text x={140} y={155} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">S2+S3 aan → links</text>
    </svg>
  ),

  // 68 Optocoupler
  68: (
    <svg viewBox="0 0 280 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Optocoupler</text>
      {/* Package outline */}
      <rect x={80} y={30} width={120} height={90} rx={4} strokeDasharray="5,3" />
      {/* LED side */}
      <line x1={40} y1={55} x2={110} y2={55} />
      <polygon points="130,45 130,65 110,55" fill="none" />
      <line x1={110} y1={45} x2={110} y2={65} />
      <line x1={130} y1={55} x2={140} y2={55} />
      <line x1={40} y1={55} x2={40} y2={100} />
      <line x1={40} y1={100} x2={140} y2={100} />
      {/* Light arrows */}
      <line x1={135} y1={60} x2={148} y2={68} stroke="#c62828" strokeWidth={1} />
      <line x1={135} y1={65} x2={148} y2={73} stroke="#c62828" strokeWidth={1} />
      <polygon points="148,68 144,68 148,64" fill="#c62828" stroke="none" />
      <polygon points="148,73 144,73 148,69" fill="#c62828" stroke="none" />
      {/* Phototransistor */}
      <line x1={170} y1={55} x2={240} y2={55} />
      <line x1={160} y1={70} x2={160} y2={90} />
      <line x1={160} y1={70} x2={170} y2={55} />
      <line x1={160} y1={90} x2={170} y2={100} />
      <line x1={170} y1={100} x2={240} y2={100} />
      {/* Labels */}
      <text x={36} y={50} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">Anode</text>
      <text x={36} y={104} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">Kathode</text>
      <text x={244} y={52} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">Collector</text>
      <text x={244} y={104} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">Emitter</text>
      {/* Isolation line */}
      <line x1={140} y1={34} x2={140} y2={116} strokeDasharray="3,3" strokeWidth={1} />
      <text x={140} y={130} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">galvanische scheiding</text>
    </svg>
  ),

  // 50 hFE basisweerstand
  50: (
    <svg viewBox="0 0 280 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Basisweerstand berekenen</text>
      {/* NPN transistor */}
      <line x1={140} y1={50} x2={140} y2={110} strokeWidth={3} />
      <line x1={100} y1={80} x2={140} y2={80} />
      <line x1={140} y1={60} x2={175} y2={40} />
      <line x1={140} y1={100} x2={175} y2={120} />
      {/* Arrow on emitter */}
      <polygon points="165,112 175,120 168,108" fill="currentColor" stroke="none" />
      {/* Rb */}
      <line x1={50} y1={80} x2={66} y2={80} />
      <rect x={66} y={72} width={34} height={16} />
      <text x={83} y={68} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Rb</text>
      {/* Labels */}
      <text x={46} y={76} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">Vin</text>
      <text x={180} y={38} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      <text x={180} y={126} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">E</text>
      <text x={95} y={76} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">B</text>
      {/* Collector load */}
      <line x1={175} y1={40} x2={175} y2={30} />
      <text x={175} y={26} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">VCC</text>
      {/* Emitter to GND */}
      <line x1={175} y1={120} x2={175} y2={135} />
      <line x1={167} y1={135} x2={183} y2={135} />
      {/* Formula */}
      <text x={140} y={152} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">Rb = (Vin {'−'} 0.7) / Ib</text>
      <text x={140} y={160} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Ib = Ic / hFE</text>
    </svg>
  ),

  // 52 PNP transistor
  52: (
    <svg viewBox="0 0 240 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={120} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">PNP Transistor</text>
      {/* Base line */}
      <line x1={100} y1={40} x2={100} y2={110} strokeWidth={3} />
      <line x1={60} y1={75} x2={100} y2={75} />
      {/* Collector */}
      <line x1={100} y1={95} x2={140} y2={115} />
      {/* Emitter with arrow INTO base */}
      <line x1={100} y1={55} x2={140} y2={35} />
      <polygon points="110,50 100,55 112,57" fill="currentColor" stroke="none" />
      {/* Labels */}
      <text x={55} y={79} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">B</text>
      <text x={145} y={33} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">E</text>
      <text x={145} y={119} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      {/* VCC at emitter */}
      <line x1={140} y1={35} x2={140} y2={22} />
      <text x={140} y={18} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">VCC</text>
      {/* Load at collector */}
      <line x1={140} y1={115} x2={140} y2={130} />
      <line x1={132} y1={130} x2={148} y2={130} />
      <text x={140} y={138} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">GND</text>
      {/* Current arrow */}
      <line x1={170} y1={40} x2={170} y2={110} stroke="#c62828" strokeDasharray="3,2" />
      <polygon points="167,110 173,110 170,118" fill="#c62828" stroke="none" />
      <text x={185} y={78} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">Ic</text>
    </svg>
  ),

  // 53 Darlington
  53: (
    <svg viewBox="0 0 280 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Darlington-paar</text>
      {/* Q1 */}
      <line x1={100} y1={40} x2={100} y2={80} strokeWidth={3} />
      <line x1={50} y1={60} x2={100} y2={60} />
      <line x1={100} y1={45} x2={130} y2={30} />
      <line x1={100} y1={75} x2={130} y2={90} />
      <polygon points="122,84 130,90 124,80" fill="currentColor" stroke="none" />
      <text x={88} y={56} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">B</text>
      <text x={108} y={40} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">Q1</text>
      {/* Q2 */}
      <line x1={150} y1={75} x2={150} y2={115} strokeWidth={3} />
      <line x1={130} y1={90} x2={150} y2={95} />
      <line x1={150} y1={80} x2={190} y2={60} />
      <line x1={150} y1={110} x2={190} y2={130} />
      <polygon points="182,124 190,130 184,120" fill="currentColor" stroke="none" />
      <text x={158} y={76} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">Q2</text>
      {/* Collector connection */}
      <line x1={130} y1={30} x2={190} y2={30} />
      <line x1={190} y1={30} x2={190} y2={60} />
      <circle cx={190} cy={30} r={2} fill="currentColor" />
      <line x1={190} y1={30} x2={230} y2={30} />
      <text x={234} y={34} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      {/* Emitter */}
      <line x1={190} y1={130} x2={230} y2={130} />
      <text x={234} y={134} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">E</text>
      {/* Formula */}
      <text x={140} y={152} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">hFE totaal = hFE1 {'×'} hFE2</text>
    </svg>
  ),

  /* ── METEN (101-165) ──────────────────────────────────────── */

  // 101 DC spanning meten
  101: (
    <svg viewBox="0 0 280 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">DC spanning meten (parallel)</text>
      {/* Circuit */}
      <line x1={40} y1={40} x2={100} y2={40} />
      <rect x={100} y={30} width={50} height={20} />
      <text x={125} y={44} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R</text>
      <line x1={150} y1={40} x2={220} y2={40} />
      <line x1={40} y1={40} x2={40} y2={110} />
      <line x1={220} y1={40} x2={220} y2={110} />
      <line x1={40} y1={110} x2={220} y2={110} />
      {/* Multimeter parallel */}
      <line x1={100} y1={40} x2={100} y2={60} stroke="#c62828" />
      <circle cx={100} cy={60} r={3} fill="#c62828" stroke="none" />
      <line x1={150} y1={40} x2={150} y2={60} stroke="#c62828" />
      <circle cx={150} cy={60} r={3} fill="#c62828" stroke="none" />
      <line x1={100} y1={63} x2={100} y2={75} stroke="#c62828" />
      <line x1={150} y1={63} x2={150} y2={75} stroke="#c62828" />
      <rect x={88} y={75} width={74} height={30} rx={4} stroke="#c62828" />
      <text x={125} y={94} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">V</text>
      <text x={125} y={125} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Meter parallel aansluiten</text>
    </svg>
  ),

  // 103 Stroom meten
  103: (
    <svg viewBox="0 0 280 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Stroom meten (serie)</text>
      {/* Circuit with break */}
      <line x1={40} y1={50} x2={80} y2={50} />
      {/* Ammeter in series */}
      <rect x={80} y={35} width={50} height={30} rx={4} stroke="#c62828" />
      <text x={105} y={55} fontSize={11} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">A</text>
      <line x1={130} y1={50} x2={170} y2={50} />
      {/* Component */}
      <rect x={170} y={40} width={40} height={20} />
      <text x={190} y={54} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R</text>
      <line x1={210} y1={50} x2={240} y2={50} />
      <line x1={240} y1={50} x2={240} y2={110} />
      <line x1={40} y1={50} x2={40} y2={110} />
      <line x1={40} y1={110} x2={240} y2={110} />
      {/* Battery */}
      <line x1={130} y1={110} x2={130} y2={95} />
      <line x1={122} y1={95} x2={138} y2={95} />
      <line x1={126} y1={90} x2={134} y2={90} strokeWidth={2.5} />
      <line x1={130} y1={90} x2={130} y2={80} />
      <text x={140} y={85} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif">+</text>
      {/* Arrow showing current path */}
      <line x1={60} y1={42} x2={76} y2={42} stroke="#c62828" strokeDasharray="3,2" />
      <polygon points="76,39 76,45 82,42" fill="#c62828" stroke="none" />
      <text x={140} y={130} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Circuit openbreken, meter in serie</text>
    </svg>
  ),

  // 104 10A bus
  104: (
    <svg viewBox="0 0 200 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={100} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Multimeter aansluitingen</text>
      {/* Meter body */}
      <rect x={40} y={25} width={120} height={120} rx={8} />
      {/* Terminals */}
      <circle cx={60} cy={125} r={8} />
      <text x={60} y={129} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">10A</text>
      <circle cx={90} cy={125} r={8} />
      <text x={90} y={129} fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">mA</text>
      <circle cx={120} cy={125} r={8} />
      <text x={120} y={128} fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">COM</text>
      <circle cx={150} cy={125} r={8} />
      <text x={150} y={128} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">V{'Ω'}</text>
      {/* Display */}
      <rect x={55} y={35} width={90} height={35} rx={3} fill="none" />
      <text x={100} y={58} fontSize={14} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">12.34</text>
      {/* Labels */}
      <text x={60} y={150} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">hoge</text>
      <text x={60} y={158} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">stroom</text>
      <text x={120} y={150} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">zwart</text>
      <text x={150} y={150} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">rood</text>
    </svg>
  ),

  // 106 Doorgangstest
  106: (
    <svg viewBox="0 0 280 120" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Doorgangstest</text>
      {/* Wire under test */}
      <line x1={40} y1={60} x2={240} y2={60} strokeWidth={2} />
      {/* Break in wire or probe points */}
      <circle cx={80} cy={60} r={4} fill="#c62828" stroke="#c62828" />
      <circle cx={200} cy={60} r={4} fill="#c62828" stroke="#c62828" />
      {/* Probes */}
      <line x1={80} y1={60} x2={80} y2={85} stroke="#c62828" />
      <line x1={200} y1={60} x2={200} y2={85} stroke="#c62828" />
      {/* Meter */}
      <rect x={90} y={85} width={100} height={25} rx={4} stroke="#c62828" />
      <text x={140} y={102} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">BEEP</text>
      {/* Speaker icon */}
      <path d="M200,90 L210,85 L210,105 L200,100 Z" fill="currentColor" stroke="none" />
      <path d="M213,88 Q218,95 213,102" strokeWidth={1.5} />
      <text x={140} y={118} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">&lt; 30{'Ω'} → pieptoon</text>
    </svg>
  ),

  // 107 Diodetest
  107: (
    <svg viewBox="0 0 280 120" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Diodetest</text>
      {/* Diode */}
      <line x1={100} y1={55} x2={125} y2={55} />
      <polygon points="125,42 125,68 150,55" fill="none" />
      <line x1={150} y1={42} x2={150} y2={68} />
      <line x1={150} y1={55} x2={180} y2={55} />
      {/* Probes */}
      <circle cx={100} cy={55} r={3} fill="#c62828" stroke="none" />
      <text x={100} y={45} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">+</text>
      <circle cx={180} cy={55} r={3} fill="currentColor" />
      <text x={180} y={45} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">{'−'}</text>
      {/* Meter */}
      <line x1={100} y1={58} x2={100} y2={80} stroke="#c62828" />
      <line x1={180} y1={58} x2={180} y2={80} stroke="#c62828" />
      <rect x={90} y={80} width={100} height={22} rx={4} stroke="#c62828" />
      <text x={140} y={96} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">0.6 V</text>
      <text x={140} y={115} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Si ≈ 0.6V  Ge ≈ 0.3V  LED ≈ 1.8-3.2V</text>
    </svg>
  ),

  // 112 CAT categorieën
  112: (
    <svg viewBox="0 0 300 130" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={150} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">CAT Categorieën (IEC 61010)</text>
      {/* Boxes left to right */}
      <rect x={20} y={35} width={70} height={40} rx={4} />
      <text x={55} y={50} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">CAT II</text>
      <text x={55} y={62} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">stopcontact</text>
      <line x1={90} y1={55} x2={108} y2={55} />
      <polygon points="105,52 105,58 111,55" fill="currentColor" stroke="none" />

      <rect x={112} y={35} width={70} height={40} rx={4} />
      <text x={147} y={50} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">CAT III</text>
      <text x={147} y={62} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">verdeelpaneel</text>
      <line x1={182} y1={55} x2={200} y2={55} />
      <polygon points="197,52 197,58 203,55" fill="currentColor" stroke="none" />

      <rect x={204} y={35} width={70} height={40} rx={4} />
      <text x={239} y={50} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">CAT IV</text>
      <text x={239} y={62} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">meter/net</text>

      {/* Danger scale */}
      <line x1={20} y1={90} x2={274} y2={90} stroke="#c62828" strokeWidth={2} />
      <polygon points="271,87 271,93 278,90" fill="#c62828" stroke="none" />
      <text x={55} y={105} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">lager risico</text>
      <text x={239} y={105} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">hoger risico</text>
      <text x={150} y={122} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Hogere CAT = dichter bij netaansluiting = meer energie</text>
    </svg>
  ),

  // 116 Stroomtang
  116: (
    <svg viewBox="0 0 220 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={110} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Stroomtang</text>
      {/* Clamp jaws */}
      <path d="M70,50 Q70,30 100,30 Q130,30 130,50" strokeWidth={3} />
      <path d="M70,50 Q70,100 100,100 Q130,100 130,50" strokeWidth={3} />
      {/* Opening indicator */}
      <line x1={68} y1={50} x2={62} y2={50} />
      <line x1={132} y1={50} x2={138} y2={50} />
      {/* Conductor through clamp */}
      <circle cx={100} cy={65} r={8} fill="none" strokeWidth={2.5} />
      <text x={100} y={69} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">I</text>
      {/* Handle */}
      <rect x={85} y={100} width={30} height={45} rx={5} />
      <rect x={90} y={105} width={20} height={14} rx={2} fill="none" />
      <text x={100} y={116} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">2.4A</text>
      {/* Arrow for magnetic field */}
      <path d="M55,65 Q50,50 55,35" stroke="#c62828" strokeDasharray="3,2" />
      <text x={42} y={55} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="end">B-veld</text>
      <text x={110} y={156} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1 geleider!</text>
    </svg>
  ),

  // 117 Oscilloscoop
  117: (
    <svg viewBox="0 0 280 150" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Oscilloscoop</text>
      {/* Screen outline */}
      <rect x={40} y={25} width={200} height={110} rx={6} />
      {/* Grid */}
      {[0,1,2,3,4].map(i => <line key={`v${i}`} x1={80+i*32} y1={25} x2={80+i*32} y2={135} strokeWidth={0.3} strokeDasharray="2,2" />)}
      {[0,1,2,3].map(i => <line key={`h${i}`} x1={40} y1={47+i*22} x2={240} y2={47+i*22} strokeWidth={0.3} strokeDasharray="2,2" />)}
      {/* Center lines */}
      <line x1={40} y1={80} x2={240} y2={80} strokeWidth={0.5} />
      <line x1={140} y1={25} x2={140} y2={135} strokeWidth={0.5} />
      {/* Sine wave */}
      <path d="M48,80 Q72,30 96,80 Q120,130 144,80 Q168,30 192,80 Q216,130 232,80" stroke="#c62828" strokeWidth={2} fill="none" />
      {/* Labels */}
      <text x={26} y={32} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="end">V/div</text>
      <text x={140} y={148} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">tijd/div</text>
      {/* Amplitude marker */}
      <line x1={250} y1={40} x2={250} y2={80} stroke="#1565c0" strokeWidth={1} />
      <text x={260} y={64} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif">Vpp</text>
    </svg>
  ),

  // 126 Soldeerverbinding doorsnede
  126: (
    <svg viewBox="0 0 260 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={130} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Soldeerverbinding (doorsnede)</text>
      {/* PCB */}
      <rect x={40} y={80} width={180} height={20} fill="none" strokeWidth={2} />
      <text x={130} y={94} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">PCB</text>
      {/* Pad */}
      <rect x={100} y={75} width={60} height={8} rx={2} stroke="#c62828" strokeWidth={1} />
      <text x={170} y={82} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif">pad</text>
      {/* Component lead */}
      <line x1={130} y1={30} x2={130} y2={100} strokeWidth={2} />
      <text x={142} y={45} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">draad</text>
      {/* Through-hole */}
      <circle cx={130} cy={85} r={5} strokeWidth={1} />
      {/* Solder fillet */}
      <path d="M105,75 Q110,60 130,55 Q150,60 155,75" fill="none" stroke="#1565c0" strokeWidth={2} />
      <text x={85} y={65} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif">soldeer</text>
      {/* Annotations */}
      <text x={130} y={125} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">concave fillet = goede verbinding</text>
    </svg>
  ),

  // 129 Goede vs koude soldeerverbinding
  129: (
    <svg viewBox="0 0 280 120" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Goede vs koude soldeerverbinding</text>
      {/* Good joint */}
      <rect x={20} y={70} width={100} height={10} fill="none" />
      <line x1={70} y1={30} x2={70} y2={80} strokeWidth={2} />
      <path d="M40,70 Q50,50 70,45 Q90,50 100,70" fill="none" stroke="#1565c0" strokeWidth={2} />
      <text x={70} y={100} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Goed</text>
      <text x={70} y={112} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">glad, glanzend, concaaf</text>

      {/* Cold joint */}
      <rect x={160} y={70} width={100} height={10} fill="none" />
      <line x1={210} y1={30} x2={210} y2={80} strokeWidth={2} />
      <path d="M175,70 Q180,55 195,52 Q205,60 210,45 Q220,55 230,52 Q240,60 245,70" fill="none" stroke="#c62828" strokeWidth={2} />
      <text x={210} y={100} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Koud</text>
      <text x={210} y={112} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">dof, bobbelig, convex</text>
    </svg>
  ),

  // 131 SMD solderen
  131: (
    <svg viewBox="0 0 280 120" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">SMD component op pads</text>
      {/* PCB */}
      <rect x={40} y={60} width={200} height={30} fill="none" strokeWidth={2} />
      <text x={140} y={82} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">PCB</text>
      {/* Pads */}
      <rect x={80} y={55} width={30} height={10} rx={1} stroke="#c62828" />
      <rect x={170} y={55} width={30} height={10} rx={1} stroke="#c62828" />
      {/* SMD body */}
      <rect x={95} y={38} width={90} height={22} rx={2} fill="none" strokeWidth={2} />
      <text x={140} y={53} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">0805</text>
      {/* Solder fillets */}
      <path d="M82,55 Q90,45 95,42" stroke="#1565c0" strokeWidth={2} fill="none" />
      <path d="M198,55 Q190,45 185,42" stroke="#1565c0" strokeWidth={2} fill="none" />
      {/* Annotations */}
      <text x={65} y={45} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="end">fillet</text>
      <text x={140} y={108} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">eerst 1 pad vertinnen, dan component plaatsen</text>
    </svg>
  ),

  // 134 Foutzoeken flowchart
  134: (
    <svg viewBox="0 0 280 160" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Foutzoeken - systematisch</text>
      {/* Start */}
      <rect x={95} y={24} width={90} height={24} rx={12} />
      <text x={140} y={40} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Start</text>
      <line x1={140} y1={48} x2={140} y2={56} />
      {/* Check voeding */}
      <polygon points="140,56 190,76 140,96 90,76" />
      <text x={140} y={80} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Voeding OK?</text>
      {/* No - fix voeding */}
      <line x1={190} y1={76} x2={240} y2={76} />
      <text x={215} y={70} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">Nee</text>
      <rect x={240} y={66} width={36} height={20} rx={3} />
      <text x={258} y={80} fontSize={6} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">Fix PSU</text>
      {/* Yes */}
      <line x1={140} y1={96} x2={140} y2={104} />
      <text x={145} y={101} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">Ja</text>
      {/* Check signaal */}
      <polygon points="140,104 190,124 140,144 90,124" />
      <text x={140} y={128} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Signaal OK?</text>
      <line x1={190} y1={124} x2={240} y2={124} />
      <text x={215} y={118} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">Nee</text>
      <rect x={240} y={114} width={36} height={20} rx={3} />
      <text x={258} y={128} fontSize={6} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">Fix sig</text>
      <line x1={140} y1={144} x2={140} y2={155} />
      <text x={145} y={150} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">Ja</text>
      <rect x={110} y={152} width={60} height={8} rx={4} />
      <text x={140} y={159} fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Check uitgang</text>
    </svg>
  ),

  // 137 Condensator ontladen
  137: (
    <svg viewBox="0 0 240 130" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={120} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Condensator ontladen</text>
      {/* Capacitor */}
      <line x1={60} y1={40} x2={60} y2={55} />
      <line x1={45} y1={55} x2={75} y2={55} />
      <line x1={45} y1={62} x2={75} y2={62} />
      <line x1={60} y1={62} x2={60} y2={80} />
      <text x={40} y={62} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">C</text>
      <text x={75} y={45} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">+</text>
      {/* Discharge resistor */}
      <line x1={60} y1={40} x2={160} y2={40} />
      <rect x={100} y={32} width={40} height={16} />
      <text x={120} y={28} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R ontlaad</text>
      <line x1={160} y1={40} x2={160} y2={80} />
      <line x1={60} y1={80} x2={160} y2={80} />
      {/* Warning */}
      <text x={120} y={100} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">GEVAAR: Geladen C kan dodelijk zijn!</text>
      <text x={120} y={115} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Altijd ontladen via weerstand, nooit kortsluiten</text>
    </svg>
  ),

  // 138 Schakelende voeding blokschema
  138: (
    <svg viewBox="0 0 340 110" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={170} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Schakelende voeding (SMPS)</text>
      {/* Blocks */}
      {[
        { x: 10, w: 45, label: 'EMI\nfilter' },
        { x: 65, w: 50, label: 'Gelijk-\nrichter' },
        { x: 125, w: 45, label: 'Switch' },
        { x: 180, w: 50, label: 'Trafo' },
        { x: 240, w: 50, label: 'Gelijk-\nrichter' },
        { x: 300, w: 36, label: 'Out' },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={35} width={b.w} height={40} rx={3} />
          {b.label.split('\n').map((line, j) => (
            <text key={j} x={b.x + b.w / 2} y={55 + j * 11} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">{line}</text>
          ))}
        </g>
      ))}
      {/* Arrows */}
      {[55, 115, 170, 230, 290].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={55} x2={x + 10} y2={55} />
          <polygon points={`${x + 7},52 ${x + 7},58 ${x + 12},55`} fill="currentColor" stroke="none" />
        </g>
      ))}
      {/* AC in / DC out labels */}
      <text x={10} y={30} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">AC 230V</text>
      <text x={300} y={30} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">DC</text>
      {/* Feedback arrow */}
      <path d="M318,75 L318,95 L147,95 L147,75" strokeDasharray="3,2" />
      <polygon points="144,78 150,78 147,72" fill="currentColor" stroke="none" />
      <text x={230} y={104} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">feedback regeling</text>
    </svg>
  ),

  // 154 DC motor
  154: (
    <svg viewBox="0 0 240 120" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={120} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">DC Motor</text>
      {/* Motor symbol */}
      <circle cx={120} cy={65} r={25} />
      <text x={120} y={70} fontSize={14} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">M</text>
      {/* Leads */}
      <line x1={50} y1={65} x2={95} y2={65} />
      <line x1={145} y1={65} x2={200} y2={65} />
      <text x={46} y={60} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="end">+</text>
      <text x={204} y={60} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">{'−'}</text>
      {/* Flyback diode */}
      <line x1={70} y1={65} x2={70} y2={35} />
      <line x1={180} y1={65} x2={180} y2={35} />
      <line x1={70} y1={35} x2={100} y2={35} />
      <polygon points="100,28 100,42 120,35" fill="none" />
      <line x1={120} y1={28} x2={120} y2={42} />
      <line x1={120} y1={35} x2={180} y2={35} />
      <circle cx={70} cy={65} r={2} fill="currentColor" />
      <circle cx={180} cy={65} r={2} fill="currentColor" />
      <text x={110} y={30} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">flyback D</text>
      <text x={120} y={108} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">altijd vrijloopdiode gebruiken!</text>
    </svg>
  ),

  // 155 BLDC motor
  155: (
    <svg viewBox="0 0 280 150" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Borstelloze motor (BLDC)</text>
      {/* Stator coils in Y */}
      <circle cx={140} cy={85} r={40} strokeDasharray="4,3" />
      {/* Center point */}
      <circle cx={140} cy={85} r={3} fill="currentColor" />
      {/* Coil A - top */}
      <line x1={140} y1={82} x2={140} y2={52} />
      <path d="M136,60 Q132,56 136,52 Q140,48 144,52 Q148,56 144,60" />
      <text x={148} y={50} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">A</text>
      {/* Coil B - bottom left */}
      <line x1={138} y1={87} x2={115} y2={110} />
      <path d="M120,108 Q116,112 112,108 Q108,104 112,100" />
      <text x={104} y={116} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">B</text>
      {/* Coil C - bottom right */}
      <line x1={142} y1={87} x2={165} y2={110} />
      <path d="M160,108 Q164,112 168,108 Q172,104 168,100" />
      <text x={174} y={116} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      {/* ESC block */}
      <rect x={200} y={55} width={60} height={30} rx={4} />
      <text x={230} y={74} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">ESC</text>
      <line x1={180} y1={65} x2={200} y2={65} />
      <line x1={180} y1={75} x2={200} y2={75} />
      <line x1={180} y1={85} x2={200} y2={85} />
      {/* Rotor */}
      <text x={140} y={90} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">N</text>
      <text x={140} y={140} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Electronische commutatie via ESC</text>
    </svg>
  ),

  // 156 Stappenmotor
  156: (
    <svg viewBox="0 0 280 150" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Stappenmotor (4 fasen)</text>
      {/* Motor body */}
      <circle cx={140} cy={80} r={35} />
      <text x={140} y={84} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">STEP</text>
      {/* 4 coils */}
      <line x1={140} y1={45} x2={140} y2={28} />
      <text x={140} y={24} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">A</text>
      <line x1={175} y1={80} x2={192} y2={80} />
      <text x={198} y={84} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">B</text>
      <line x1={140} y1={115} x2={140} y2={132} />
      <text x={140} y={142} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">A'</text>
      <line x1={105} y1={80} x2={88} y2={80} />
      <text x={82} y={84} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="end">B'</text>
      {/* Step sequence */}
      <text x={230} y={40} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">Stap 1: A</text>
      <text x={230} y={52} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">Stap 2: B</text>
      <text x={230} y={64} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">Stap 3: A'</text>
      <text x={230} y={76} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">Stap 4: B'</text>
      <text x={230} y={94} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif">→ herhaal</text>
    </svg>
  ),

  // 160 Laadcurve CC/CV
  160: (
    <svg viewBox="0 0 300 150" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={150} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Laadcurve CC/CV</text>
      {/* Axes */}
      <line x1={50} y1={130} x2={270} y2={130} />
      <line x1={50} y1={30} x2={50} y2={130} />
      <text x={160} y={146} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Tijd</text>
      {/* CC phase - current constant, voltage rising */}
      <line x1={50} y1={50} x2={160} y2={50} stroke="#c62828" strokeWidth={2} />
      <text x={105} y={44} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">I (constant)</text>
      <path d="M50,120 Q100,100 160,55" stroke="#1565c0" strokeWidth={2} fill="none" />
      <text x={90} y={110} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">V stijgt</text>
      {/* CV phase - voltage constant, current dropping */}
      <line x1={160} y1={55} x2={260} y2={55} stroke="#1565c0" strokeWidth={2} />
      <text x={210} y={50} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">V (constant)</text>
      <path d="M160,50 Q200,60 260,120" stroke="#c62828" strokeWidth={2} fill="none" />
      <text x={220} y={100} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">I daalt</text>
      {/* Phase labels */}
      <line x1={160} y1={30} x2={160} y2={130} strokeDasharray="3,3" strokeWidth={0.8} />
      <text x={105} y={28} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">CC</text>
      <text x={210} y={28} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">CV</text>
    </svg>
  ),

  // 163 Zonnepaneel + omvormer
  163: (
    <svg viewBox="0 0 320 120" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={160} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Zonnepaneel → Omvormer → Net</text>
      {/* Solar panel */}
      <rect x={20} y={30} width={70} height={55} rx={3} />
      <line x1={30} y1={30} x2={30} y2={85} strokeWidth={0.5} />
      <line x1={50} y1={30} x2={50} y2={85} strokeWidth={0.5} />
      <line x1={70} y1={30} x2={70} y2={85} strokeWidth={0.5} />
      <line x1={20} y1={48} x2={90} y2={48} strokeWidth={0.5} />
      <line x1={20} y1={67} x2={90} y2={67} strokeWidth={0.5} />
      <text x={55} y={100} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">PV-paneel</text>
      {/* DC cable */}
      <line x1={90} y1={57} x2={130} y2={57} />
      <text x={110} y={52} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">DC</text>
      {/* Inverter */}
      <rect x={130} y={35} width={70} height={45} rx={4} />
      <text x={165} y={55} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Omvormer</text>
      <text x={165} y={68} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">(inverter)</text>
      {/* AC cable */}
      <line x1={200} y1={57} x2={240} y2={57} />
      <text x={220} y={52} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">AC</text>
      {/* Grid symbol */}
      <rect x={240} y={35} width={60} height={45} rx={4} />
      <text x={270} y={55} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Net</text>
      <text x={270} y={68} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">230V~</text>
      {/* Sun */}
      <circle cx={55} cy={20} r={6} stroke="#c62828" fill="none" />
      <line x1={55} y1={12} x2={55} y2={8} stroke="#c62828" />
      <line x1={61} y1={14} x2={64} y2={11} stroke="#c62828" />
      <line x1={49} y1={14} x2={46} y2={11} stroke="#c62828" />
    </svg>
  ),

  // 165 USB-PD / USB-C pinout simplified
  165: (
    <svg viewBox="0 0 280 140" className="kr-esvg" stroke="currentColor" strokeWidth={1.5} fill="none">
      <text x={140} y={14} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">USB-C vereenvoudigd</text>
      {/* Connector shape */}
      <rect x={70} y={30} width={140} height={50} rx={20} />
      {/* Pin rows */}
      {/* Top row */}
      <text x={95} y={48} fontSize={6} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">VBUS</text>
      <text x={120} y={48} fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">CC1</text>
      <text x={145} y={48} fontSize={6} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">D+</text>
      <text x={165} y={48} fontSize={6} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">D{'−'}</text>
      <text x={190} y={48} fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">GND</text>
      {/* Bottom row */}
      <text x={95} y={70} fontSize={6} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">VBUS</text>
      <text x={120} y={70} fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">CC2</text>
      <text x={145} y={70} fontSize={6} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">TX+</text>
      <text x={165} y={70} fontSize={6} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">TX{'−'}</text>
      <text x={190} y={70} fontSize={6} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">GND</text>
      {/* PD info */}
      <text x={140} y={100} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">USB-PD via CC-pin: tot 240W (48V/5A)</text>
      <text x={140} y={114} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">CC-pin bepaalt richting en vermogen</text>
      <text x={140} y={128} fontSize={7} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">VBUS: 5V / 9V / 15V / 20V / 48V</text>
    </svg>
  ),
}
