import type { ReactNode } from 'react'

export const SCHEMAS1: Record<number, ReactNode> = {

  /* ── 1  Spanning: het drukverschil ─────────────────────────── */
  1: (
    <svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* battery */}
      <line x1={100} y1={30} x2={100} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={100} y1={30} x2={120} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* long plate + */}
      <line x1={120} y1={15} x2={120} y2={45} stroke="currentColor" strokeWidth={2} />
      {/* short plate - */}
      <line x1={130} y1={22} x2={130} y2={38} stroke="currentColor" strokeWidth={2} />
      <line x1={130} y1={30} x2={150} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={150} y1={30} x2={150} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={100} y1={100} x2={150} y2={100} stroke="currentColor" strokeWidth={1.5} />
      {/* + and - labels */}
      <text x={115} y={12} fontSize={11} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">+</text>
      <text x={135} y={12} fontSize={11} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">−</text>
      {/* voltmeter */}
      <circle cx={200} cy={65} r={18} stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x={200} y={70} fontSize={13} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">V</text>
      {/* wires to voltmeter */}
      <line x1={150} y1={40} x2={200} y2={47} stroke="currentColor" strokeWidth={1} strokeDasharray="4 2" />
      <line x1={150} y1={90} x2={200} y2={83} stroke="currentColor" strokeWidth={1} strokeDasharray="4 2" />
      {/* voltage label */}
      <text x={240} y={68} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif">U (V)</text>
      <text x={125} y={120} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Batterij</text>
    </svg>
  ),

  /* ── 2  Stroom (current) ──────────────────────────────────── */
  2: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* circuit loop */}
      <line x1={40} y1={30} x2={240} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={30} x2={240} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={110} x2={40} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={110} x2={40} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery on left */}
      <line x1={40} y1={55} x2={40} y2={55} stroke="currentColor" strokeWidth={1.5} />
      <line x1={30} y1={58} x2={50} y2={58} stroke="currentColor" strokeWidth={2} />
      <line x1={34} y1={68} x2={46} y2={68} stroke="currentColor" strokeWidth={2} />
      <text x={25} y={56} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">+</text>
      <text x={25} y={78} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">−</text>
      {/* resistor on right (EU rectangle) */}
      <rect x={225} y={58} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={240} y={55} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R</text>
      {/* ammeter in series (top) */}
      <circle cx={140} cy={30} r={12} stroke="currentColor" strokeWidth={1.5} fill="none" />
      <text x={140} y={34} fontSize={11} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">A</text>
      {/* current arrow */}
      <polygon points="180,24 190,30 180,36" fill="#c62828" />
      <text x={185} y={20} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">I</text>
      {/* arrow on bottom */}
      <polygon points="120,116 110,110 120,104" fill="#c62828" />
    </svg>
  ),

  /* ── 3  Weerstand ─────────────────────────────────────────── */
  3: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* thin short wire */}
      <line x1={30} y1={30} x2={120} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <rect x={120} y={24} width={40} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={160} y1={30} x2={250} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <text x={140} y={20} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">kort, dun → hoge R</text>
      {/* thick long wire */}
      <line x1={30} y1={80} x2={100} y2={80} stroke="currentColor" strokeWidth={3} />
      <rect x={100} y={72} width={80} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={180} y1={80} x2={250} y2={80} stroke="currentColor" strokeWidth={3} />
      <text x={140} y={65} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">lang, dik → lage R</text>
      {/* formula */}
      <text x={140} y={110} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">R = ρ · l / A</text>
    </svg>
  ),

  /* ── 4  Wet van Ohm ───────────────────────────────────────── */
  4: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* circuit */}
      <line x1={40} y1={30} x2={240} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={30} x2={240} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={110} x2={40} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={110} x2={40} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery */}
      <line x1={30} y1={55} x2={50} y2={55} stroke="currentColor" strokeWidth={2.5} />
      <line x1={33} y1={65} x2={47} y2={65} stroke="currentColor" strokeWidth={2} />
      <text x={55} y={63} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">U</text>
      {/* resistor */}
      <rect x={130} y={24} width={40} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={150} y={20} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R</text>
      {/* current arrow */}
      <polygon points="100,24 110,30 100,36" fill="#c62828" />
      <text x={105} y={18} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">I</text>
      {/* formula */}
      <text x={140} y={135} fontSize={11} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">U = I × R</text>
    </svg>
  ),

  /* ── 5  Vermogen P = U × I ────────────────────────────────── */
  5: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* simple circuit */}
      <line x1={50} y1={30} x2={230} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={230} y1={30} x2={230} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={230} y1={100} x2={50} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={50} y1={100} x2={50} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery */}
      <line x1={40} y1={52} x2={60} y2={52} stroke="currentColor" strokeWidth={2.5} />
      <line x1={43} y1={62} x2={57} y2={62} stroke="currentColor" strokeWidth={2} />
      {/* resistor */}
      <rect x={130} y={24} width={40} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      {/* heat waves */}
      <path d="M135,18 C137,12 139,12 141,18" stroke="#c62828" strokeWidth={1} fill="none" />
      <path d="M147,18 C149,12 151,12 153,18" stroke="#c62828" strokeWidth={1} fill="none" />
      <path d="M159,18 C161,12 163,12 165,18" stroke="#c62828" strokeWidth={1} fill="none" />
      {/* labels */}
      <text x={68} y={60} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif">U</text>
      <text x={100} y={24} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif">I →</text>
      <text x={150} y={50} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">P (warmte)</text>
      <text x={140} y={130} fontSize={11} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">P = U × I</text>
    </svg>
  ),

  /* ── 7  Serieschakeling ───────────────────────────────────── */
  7: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* loop */}
      <line x1={40} y1={30} x2={100} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <rect x={100} y={24} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={130} y1={30} x2={160} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <rect x={160} y={24} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={190} y1={30} x2={240} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={30} x2={240} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={110} x2={40} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={110} x2={40} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery */}
      <line x1={30} y1={58} x2={50} y2={58} stroke="currentColor" strokeWidth={2.5} />
      <line x1={33} y1={68} x2={47} y2={68} stroke="currentColor" strokeWidth={2} />
      {/* labels */}
      <text x={115} y={20} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R₁</text>
      <text x={175} y={20} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R₂</text>
      {/* current arrow */}
      <polygon points="75,24 85,30 75,36" fill="#c62828" />
      <text x={80} y={18} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">I</text>
      {/* formula */}
      <text x={140} y={135} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">R_tot = R₁ + R₂</text>
    </svg>
  ),

  /* ── 8  Parallelschakeling ────────────────────────────────── */
  8: (
    <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* main lines */}
      <line x1={40} y1={30} x2={100} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={200} y1={30} x2={240} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={30} x2={240} y2={120} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={120} x2={40} y2={120} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={120} x2={40} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* split to two branches */}
      <line x1={100} y1={30} x2={100} y2={20} stroke="currentColor" strokeWidth={1.5} />
      <line x1={100} y1={20} x2={120} y2={20} stroke="currentColor" strokeWidth={1.5} />
      <rect x={120} y={14} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={150} y1={20} x2={200} y2={20} stroke="currentColor" strokeWidth={1.5} />
      <line x1={200} y1={20} x2={200} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* second branch */}
      <line x1={100} y1={30} x2={100} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <line x1={100} y1={45} x2={120} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <rect x={120} y={39} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={150} y1={45} x2={200} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <line x1={200} y1={45} x2={200} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery */}
      <line x1={30} y1={65} x2={50} y2={65} stroke="currentColor" strokeWidth={2.5} />
      <line x1={33} y1={75} x2={47} y2={75} stroke="currentColor" strokeWidth={2} />
      {/* labels */}
      <text x={135} y={11} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R₁</text>
      <text x={135} y={57} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R₂</text>
      {/* node dots */}
      <circle cx={100} cy={30} r={2.5} fill="currentColor" />
      <circle cx={200} cy={30} r={2.5} fill="currentColor" />
      {/* formula */}
      <text x={140} y={142} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">1/R_tot = 1/R₁ + 1/R₂</text>
    </svg>
  ),

  /* ── 12  Kortsluiting ─────────────────────────────────────── */
  12: (
    <svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* circuit */}
      <line x1={50} y1={30} x2={230} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={230} y1={30} x2={230} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={230} y1={100} x2={50} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={50} y1={100} x2={50} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery */}
      <line x1={40} y1={52} x2={60} y2={52} stroke="currentColor" strokeWidth={2.5} />
      <line x1={43} y1={62} x2={57} y2={62} stroke="currentColor" strokeWidth={2} />
      {/* short circuit wire — thick red */}
      <line x1={140} y1={30} x2={140} y2={100} stroke="#c62828" strokeWidth={2.5} />
      {/* spark */}
      <path d="M134,60 L138,55 L136,62 L140,57 L138,64 L142,59" stroke="#c62828" strokeWidth={1.2} fill="none" />
      {/* big current arrow */}
      <polygon points="90,24 105,30 90,36" fill="#c62828" />
      <text x={97} y={18} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">I ↑↑</text>
      <text x={140} y={122} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">R ≈ 0 → I zeer groot!</text>
    </svg>
  ),

  /* ── 13  Kirchhoff stroomwet (KCL) ────────────────────────── */
  13: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* central node */}
      <circle cx={140} cy={70} r={4} fill="currentColor" />
      {/* incoming currents */}
      <line x1={40} y1={40} x2={140} y2={70} stroke="currentColor" strokeWidth={1.5} />
      <polygon points="100,50 108,58 96,58" fill="#c62828" />
      <text x={55} y={38} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif">I₁</text>
      <line x1={40} y1={110} x2={140} y2={70} stroke="currentColor" strokeWidth={1.5} />
      <polygon points="100,86 108,78 96,78" fill="#c62828" />
      <text x={55} y={112} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif">I₂</text>
      {/* outgoing currents */}
      <line x1={140} y1={70} x2={240} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <polygon points="200,50 192,58 196,46" fill="#1565c0" />
      <text x={225} y={38} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif">I₃</text>
      <line x1={140} y1={70} x2={240} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <polygon points="200,94 192,86 196,98" fill="#1565c0" />
      <text x={225} y={112} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif">I₄</text>
      {/* formula */}
      <text x={140} y={135} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">ΣI_in = ΣI_uit</text>
    </svg>
  ),

  /* ── 14  Kirchhoff spanningswet (KVL) ─────────────────────── */
  14: (
    <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* loop */}
      <line x1={60} y1={30} x2={220} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={220} y1={30} x2={220} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={220} y1={110} x2={60} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={60} y1={110} x2={60} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery left */}
      <line x1={50} y1={55} x2={70} y2={55} stroke="currentColor" strokeWidth={2.5} />
      <line x1={53} y1={65} x2={67} y2={65} stroke="currentColor" strokeWidth={2} />
      <text x={75} y={64} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">U_bron</text>
      {/* R1 top */}
      <rect x={120} y={24} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={135} y={20} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R₁</text>
      <text x={135} y={48} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">U₁</text>
      {/* R2 right */}
      <rect x={214} y={60} width={12} height={30} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={238} y={78} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">R₂</text>
      <text x={205} y={78} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="end">U₂</text>
      {/* loop arrow */}
      <path d="M130,65 A20,20 0 1,1 150,65" stroke="#c62828" strokeWidth={1} fill="none" />
      <polygon points="150,65 146,59 154,61" fill="#c62828" />
      {/* formula */}
      <text x={140} y={140} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">U_bron = U₁ + U₂</text>
    </svg>
  ),

  /* ── 15  Spanningsdeler ───────────────────────────────────── */
  15: (
    <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* main circuit */}
      <line x1={50} y1={20} x2={140} y2={20} stroke="currentColor" strokeWidth={1.5} />
      <rect x={140} y={14} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={170} y1={20} x2={230} y2={20} stroke="currentColor" strokeWidth={1.5} />
      <line x1={230} y1={20} x2={230} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* mid tap */}
      <circle cx={230} cy={50} r={2.5} fill="currentColor" />
      <line x1={230} y1={50} x2={260} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <text x={265} y={54} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">U_uit</text>
      {/* R2 */}
      <line x1={230} y1={50} x2={230} y2={58} stroke="currentColor" strokeWidth={1.5} />
      <rect x={224} y={58} width={12} height={30} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={230} y1={88} x2={230} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={230} y1={100} x2={50} y2={100} stroke="currentColor" strokeWidth={1.5} />
      <line x1={50} y1={100} x2={50} y2={20} stroke="currentColor" strokeWidth={1.5} />
      {/* battery */}
      <line x1={40} y1={48} x2={60} y2={48} stroke="currentColor" strokeWidth={2.5} />
      <line x1={43} y1={58} x2={57} y2={58} stroke="currentColor" strokeWidth={2} />
      <text x={30} y={56} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">U_in</text>
      {/* labels */}
      <text x={155} y={11} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R₁</text>
      <text x={215} y={76} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">R₂</text>
      {/* ground line */}
      <line x1={260} y1={100} x2={230} y2={100} stroke="currentColor" strokeWidth={1.5} />
      {/* formula */}
      <text x={140} y={140} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">U_uit = U_in × R₂ / (R₁ + R₂)</text>
    </svg>
  ),

  /* ── 16  Inwendige weerstand ──────────────────────────────── */
  16: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* battery box */}
      <rect x={30} y={25} width={100} height={90} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="4 3" rx={4} />
      <text x={80} y={18} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">batterij</text>
      {/* EMF source */}
      <line x1={50} y1={45} x2={50} y2={80} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={55} x2={60} y2={55} stroke="currentColor" strokeWidth={2.5} />
      <line x1={43} y1={65} x2={57} y2={65} stroke="currentColor" strokeWidth={2} />
      <text x={65} y={64} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">ε</text>
      {/* internal resistance */}
      <line x1={50} y1={45} x2={100} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <rect x={75} y={39} width={25} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={88} y={36} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">r_i</text>
      <line x1={100} y1={45} x2={130} y2={45} stroke="currentColor" strokeWidth={1.5} />
      {/* external circuit */}
      <line x1={130} y1={45} x2={220} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <rect x={180} y={39} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={195} y={36} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R</text>
      <line x1={220} y1={45} x2={220} y2={80} stroke="currentColor" strokeWidth={1.5} />
      <line x1={220} y1={80} x2={50} y2={80} stroke="currentColor" strokeWidth={1.5} />
      {/* voltage label */}
      <text x={175} y={68} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">U_klem</text>
      {/* formula */}
      <text x={140} y={130} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">U_klem = ε − I·r_i</text>
    </svg>
  ),

  /* ── 23  Weerstandssymbolen ───────────────────────────────── */
  23: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* EU style: rectangle */}
      <text x={70} y={18} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">IEC (EU)</text>
      <line x1={20} y1={40} x2={40} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <rect x={40} y={32} width={60} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={100} y1={40} x2={120} y2={40} stroke="currentColor" strokeWidth={1.5} />
      {/* US style: zigzag */}
      <text x={210} y={18} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">ANSI (US)</text>
      <line x1={160} y1={40} x2={175} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <polyline points="175,40 180,28 190,52 200,28 210,52 220,28 230,52 235,40" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={235} y1={40} x2={260} y2={40} stroke="currentColor" strokeWidth={1.5} />
      {/* shared label */}
      <text x={140} y={90} fontSize={11} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Symbool: R  |  Eenheid: Ω (ohm)</text>
    </svg>
  ),

  /* ── 24  Kleurcode ────────────────────────────────────────── */
  24: (
    <svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* resistor body */}
      <rect x={60} y={30} width={160} height={40} rx={8} fill="#d4c09e" stroke="currentColor" strokeWidth={1.5} />
      {/* leads */}
      <line x1={20} y1={50} x2={60} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <line x1={220} y1={50} x2={260} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* band 1 - brown */}
      <rect x={80} y={30} width={12} height={40} fill="#8B4513" rx={1} />
      <text x={86} y={85} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">1</text>
      {/* band 2 - black */}
      <rect x={105} y={30} width={12} height={40} fill="#222" rx={1} />
      <text x={111} y={85} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">0</text>
      {/* band 3 - red (multiplier) */}
      <rect x={130} y={30} width={12} height={40} fill="#c62828" rx={1} />
      <text x={136} y={85} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">×100</text>
      {/* band 4 - gold (tolerance) */}
      <rect x={175} y={30} width={12} height={40} fill="#DAA520" rx={1} />
      <text x={181} y={85} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">±5%</text>
      {/* result */}
      <text x={140} y={115} fontSize={11} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">= 1 kΩ  ±5%</text>
    </svg>
  ),

  /* ── 27  Potmeter ─────────────────────────────────────────── */
  27: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* resistor body */}
      <line x1={60} y1={50} x2={90} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <rect x={90} y={44} width={60} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={150} y1={50} x2={180} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* wiper arrow */}
      <line x1={120} y1={44} x2={120} y2={20} stroke="currentColor" strokeWidth={1.5} />
      <polygon points="116,32 120,44 124,32" fill="currentColor" />
      <line x1={120} y1={20} x2={180} y2={20} stroke="currentColor" strokeWidth={1.5} />
      {/* terminal labels */}
      <text x={50} y={54} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">1</text>
      <text x={190} y={54} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">3</text>
      <text x={190} y={24} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">2 (wiper)</text>
      {/* label */}
      <text x={120} y={80} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Potentiometer</text>
      <text x={120} y={95} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Variabele weerstand</text>
    </svg>
  ),

  /* ── 28  LDR ──────────────────────────────────────────────── */
  28: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* resistor body */}
      <line x1={60} y1={55} x2={100} y2={55} stroke="currentColor" strokeWidth={1.5} />
      <rect x={100} y={49} width={60} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={160} y1={55} x2={200} y2={55} stroke="currentColor" strokeWidth={1.5} />
      {/* circle around for LDR */}
      <circle cx={130} cy={55} r={22} stroke="currentColor" strokeWidth={1} fill="none" />
      {/* light arrows */}
      <line x1={105} y1={28} x2={115} y2={38} stroke="#c62828" strokeWidth={1.2} />
      <polygon points="115,38 112,32 118,35" fill="#c62828" />
      <line x1={115} y1={24} x2={125} y2={34} stroke="#c62828" strokeWidth={1.2} />
      <polygon points="125,34 122,28 128,31" fill="#c62828" />
      {/* label */}
      <text x={130} y={95} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">LDR</text>
      <text x={130} y={108} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">meer licht → minder R</text>
    </svg>
  ),

  /* ── 29  NTC / PTC ────────────────────────────────────────── */
  29: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* NTC */}
      <text x={80} y={15} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">NTC</text>
      <line x1={30} y1={35} x2={55} y2={35} stroke="currentColor" strokeWidth={1.5} />
      <rect x={55} y={29} width={50} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={105} y1={35} x2={130} y2={35} stroke="currentColor" strokeWidth={1.5} />
      {/* diagonal with -t */}
      <line x1={60} y1={44} x2={100} y2={26} stroke="currentColor" strokeWidth={1} />
      <text x={102} y={24} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">−t°</text>
      <text x={80} y={60} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">T↑ → R↓</text>
      {/* PTC */}
      <text x={210} y={15} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">PTC</text>
      <line x1={160} y1={35} x2={185} y2={35} stroke="currentColor" strokeWidth={1.5} />
      <rect x={185} y={29} width={50} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={235} y1={35} x2={260} y2={35} stroke="currentColor" strokeWidth={1.5} />
      {/* diagonal with +t */}
      <line x1={190} y1={44} x2={230} y2={26} stroke="currentColor" strokeWidth={1} />
      <text x={232} y={24} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">+t°</text>
      <text x={210} y={60} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">T↑ → R↑</text>
      {/* thermometer icon */}
      <text x={140} y={100} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Temperatuurafhankelijke weerstand</text>
    </svg>
  ),

  /* ── 30  Condensator ──────────────────────────────────────── */
  30: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={60} y1={50} x2={120} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <line x1={160} y1={50} x2={220} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* plates */}
      <line x1={120} y1={25} x2={120} y2={75} stroke="currentColor" strokeWidth={2} />
      <line x1={140} y1={25} x2={140} y2={75} stroke="currentColor" strokeWidth={2} />
      {/* charge symbols */}
      <text x={112} y={45} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="end">+</text>
      <text x={112} y={60} fontSize={10} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="end">+</text>
      <text x={148} y={45} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif">−</text>
      <text x={148} y={60} fontSize={10} fill="#1565c0" fontFamily="system-ui, sans-serif">−</text>
      {/* electric field arrows */}
      <line x1={125} y1={50} x2={135} y2={50} stroke="currentColor" strokeWidth={0.8} />
      <polygon points="135,50 131,47 131,53" fill="currentColor" />
      {/* label */}
      <text x={140} y={95} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Condensator  C</text>
      <text x={140} y={110} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Q = C × U</text>
    </svg>
  ),

  /* ── 31  Elco polariteit ──────────────────────────────────── */
  31: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={60} y1={50} x2={120} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <line x1={150} y1={50} x2={220} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* + plate (straight) */}
      <line x1={120} y1={25} x2={120} y2={75} stroke="currentColor" strokeWidth={2} />
      {/* - plate (curved) */}
      <path d="M140,25 Q150,50 140,75" stroke="currentColor" strokeWidth={2} fill="none" />
      {/* polarity */}
      <text x={108} y={30} fontSize={12} fill="#c62828" fontFamily="system-ui, sans-serif" fontWeight="bold">+</text>
      <text x={152} y={30} fontSize={12} fill="#1565c0" fontFamily="system-ui, sans-serif" fontWeight="bold">−</text>
      {/* warning */}
      <text x={140} y={95} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Elektrolytische condensator</text>
      <text x={140} y={110} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">Let op polariteit!</text>
    </svg>
  ),

  /* ── 33  RC-tijd ──────────────────────────────────────────── */
  33: (
    <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* RC circuit */}
      <line x1={30} y1={30} x2={80} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <rect x={80} y={24} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={110} y1={30} x2={150} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* capacitor */}
      <line x1={150} y1={30} x2={150} y2={42} stroke="currentColor" strokeWidth={1.5} />
      <line x1={140} y1={42} x2={160} y2={42} stroke="currentColor" strokeWidth={2} />
      <line x1={140} y1={50} x2={160} y2={50} stroke="currentColor" strokeWidth={2} />
      <line x1={150} y1={50} x2={150} y2={60} stroke="currentColor" strokeWidth={1.5} />
      <line x1={30} y1={60} x2={150} y2={60} stroke="currentColor" strokeWidth={1.5} />
      <line x1={30} y1={30} x2={30} y2={60} stroke="currentColor" strokeWidth={1.5} />
      {/* labels */}
      <text x={95} y={20} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R</text>
      <text x={165} y={48} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      {/* charge curve */}
      <line x1={30} y1={90} x2={30} y2={140} stroke="currentColor" strokeWidth={1} />
      <line x1={30} y1={140} x2={250} y2={140} stroke="currentColor" strokeWidth={1} />
      <text x={25} y={88} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">U_c</text>
      <text x={255} y={140} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">t</text>
      {/* exponential curve */}
      <path d="M30,140 Q60,95 90,100 Q130,102 170,104 L250,105" stroke="#c62828" strokeWidth={1.5} fill="none" />
      {/* dashed 63% line */}
      <line x1={30} y1={105} x2={250} y2={105} stroke="#1565c0" strokeWidth={0.8} strokeDasharray="3 2" />
      <text x={255} y={108} fontSize={7} fill="#1565c0" fontFamily="system-ui, sans-serif">63%</text>
      {/* tau mark */}
      <line x1={90} y1={138} x2={90} y2={142} stroke="currentColor" strokeWidth={1} />
      <text x={90} y={150} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">τ = RC</text>
    </svg>
  ),

  /* ── 34  Spoel ────────────────────────────────────────────── */
  34: (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={40} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <line x1={200} y1={50} x2={240} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* coil loops */}
      <path d="M80,50 Q90,30 100,50 Q110,30 120,50 Q130,30 140,50 Q150,30 160,50 Q170,30 180,50 Q190,30 200,50" stroke="currentColor" strokeWidth={1.5} fill="none" />
      {/* label */}
      <text x={140} y={75} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">L (henry)</text>
      <text x={140} y={90} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">U = L · dI/dt</text>
    </svg>
  ),

  /* ── 35  Transformator ────────────────────────────────────── */
  35: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* primary coil */}
      <line x1={30} y1={30} x2={80} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <path d="M80,30 Q90,20 90,35 Q90,50 80,45 Q90,40 90,55 Q90,70 80,65 Q90,60 90,75 Q90,90 80,85" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <line x1={80} y1={85} x2={30} y2={85} stroke="currentColor" strokeWidth={1.5} />
      <line x1={30} y1={30} x2={30} y2={85} stroke="currentColor" strokeWidth={1.5} />
      {/* core lines */}
      <line x1={105} y1={20} x2={105} y2={95} stroke="currentColor" strokeWidth={2} />
      <line x1={115} y1={20} x2={115} y2={95} stroke="currentColor" strokeWidth={2} />
      {/* secondary coil */}
      <line x1={250} y1={30} x2={140} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <path d="M140,30 Q130,20 130,35 Q130,50 140,45 Q130,40 130,55 Q130,70 140,65 Q130,60 130,75 Q130,90 140,85" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <line x1={140} y1={85} x2={250} y2={85} stroke="currentColor" strokeWidth={1.5} />
      <line x1={250} y1={30} x2={250} y2={85} stroke="currentColor" strokeWidth={1.5} />
      {/* labels */}
      <text x={50} y={115} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Primair</text>
      <text x={50} y={127} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">N₁ wind.</text>
      <text x={200} y={115} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Secundair</text>
      <text x={200} y={127} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">N₂ wind.</text>
      <text x={140} y={137} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">U₂/U₁ = N₂/N₁</text>
    </svg>
  ),

  /* ── 36  Diode ────────────────────────────────────────────── */
  36: (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={40} y1={50} x2={110} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <line x1={170} y1={50} x2={240} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* triangle */}
      <polygon points="110,30 110,70 155,50" fill="none" stroke="currentColor" strokeWidth={1.5} />
      {/* bar (cathode) */}
      <line x1={155} y1={30} x2={155} y2={70} stroke="currentColor" strokeWidth={2} />
      <line x1={155} y1={50} x2={170} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* labels */}
      <text x={80} y={30} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Anode</text>
      <text x={195} y={30} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Kathode</text>
      {/* current direction */}
      <polygon points="185,44 195,50 185,56" fill="#c62828" />
      <text x={195} y={75} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">I →</text>
      <text x={140} y={95} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Stroom alleen A → K</text>
    </svg>
  ),

  /* ── 37  Gelijkrichterbrug ────────────────────────────────── */
  37: (
    <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* diamond of 4 diodes */}
      {/* top */}
      <polygon points="130,25 140,40 120,40" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={120} y1={40} x2={140} y2={40} stroke="currentColor" strokeWidth={2} />
      {/* right */}
      <polygon points="155,55 140,65 140,45" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={140} y1={45} x2={140} y2={65} stroke="currentColor" strokeWidth={2} />
      {/* bottom */}
      <polygon points="130,85 120,70 140,70" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={120} y1={70} x2={140} y2={70} stroke="currentColor" strokeWidth={2} />
      {/* left */}
      <polygon points="105,55 120,45 120,65" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={120} y1={45} x2={120} y2={65} stroke="currentColor" strokeWidth={2} />
      {/* connecting lines */}
      <line x1={130} y1={25} x2={155} y2={55} stroke="currentColor" strokeWidth={1.5} />
      <line x1={155} y1={55} x2={130} y2={85} stroke="currentColor" strokeWidth={1.5} />
      <line x1={130} y1={85} x2={105} y2={55} stroke="currentColor" strokeWidth={1.5} />
      <line x1={105} y1={55} x2={130} y2={25} stroke="currentColor" strokeWidth={1.5} />
      {/* AC input */}
      <line x1={40} y1={40} x2={105} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={70} x2={105} y2={70} stroke="currentColor" strokeWidth={1.5} />
      <text x={30} y={58} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">AC ~</text>
      {/* DC output */}
      <line x1={155} y1={40} x2={240} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <line x1={155} y1={70} x2={240} y2={70} stroke="currentColor" strokeWidth={1.5} />
      <text x={250} y={50} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif">+</text>
      <text x={250} y={74} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif">−</text>
      <text x={245} y={60} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">DC</text>
      {/* wave symbols */}
      <path d="M25,50 Q30,42 35,50 Q40,58 45,50" stroke="currentColor" strokeWidth={1} fill="none" />
      <text x={140} y={115} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Bruggelijkrichter</text>
    </svg>
  ),

  /* ── 38  Zenerdiode ───────────────────────────────────────── */
  38: (
    <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* circuit */}
      <line x1={30} y1={25} x2={80} y2={25} stroke="currentColor" strokeWidth={1.5} />
      <rect x={80} y={19} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={110} y1={25} x2={200} y2={25} stroke="currentColor" strokeWidth={1.5} />
      <line x1={200} y1={25} x2={200} y2={40} stroke="currentColor" strokeWidth={1.5} />
      {/* zener diode (vertical, reversed) */}
      <polygon points="190,55 210,55 200,40" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={188} y1={40} x2={212} y2={40} stroke="currentColor" strokeWidth={2} />
      {/* zener bends */}
      <line x1={188} y1={40} x2={185} y2={35} stroke="currentColor" strokeWidth={2} />
      <line x1={212} y1={40} x2={215} y2={45} stroke="currentColor" strokeWidth={2} />
      <line x1={200} y1={55} x2={200} y2={80} stroke="currentColor" strokeWidth={1.5} />
      {/* bottom wire + return */}
      <line x1={200} y1={80} x2={30} y2={80} stroke="currentColor" strokeWidth={1.5} />
      <line x1={30} y1={25} x2={30} y2={80} stroke="currentColor" strokeWidth={1.5} />
      {/* output taps */}
      <line x1={200} y1={30} x2={250} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={200} y1={70} x2={250} y2={70} stroke="currentColor" strokeWidth={1.5} />
      <text x={255} y={34} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">U_uit</text>
      {/* labels */}
      <text x={95} y={16} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R</text>
      <text x={175} y={50} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">Z</text>
      <text x={140} y={105} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Zener: stabiele U_uit</text>
    </svg>
  ),

  /* ── 39  LED ──────────────────────────────────────────────── */
  39: (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={40} y1={50} x2={110} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <line x1={155} y1={50} x2={240} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* diode triangle */}
      <polygon points="110,30 110,70 155,50" fill="none" stroke="currentColor" strokeWidth={1.5} />
      {/* cathode bar */}
      <line x1={155} y1={30} x2={155} y2={70} stroke="currentColor" strokeWidth={2} />
      {/* light arrows (outward) */}
      <line x1={145} y1={25} x2={155} y2={12} stroke="#c62828" strokeWidth={1.2} />
      <polygon points="155,12 149,15 152,20" fill="#c62828" />
      <line x1={155} y1={22} x2={165} y2={9} stroke="#c62828" strokeWidth={1.2} />
      <polygon points="165,9 159,12 162,17" fill="#c62828" />
      {/* labels */}
      <text x={80} y={40} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">A (+)</text>
      <text x={200} y={40} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">K (−)</text>
      <text x={140} y={90} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">LED</text>
    </svg>
  ),

  /* ── 40  LED voorschakelweerstand ──────────────────────────── */
  40: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* circuit loop */}
      <line x1={40} y1={30} x2={80} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <rect x={80} y={24} width={30} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={110} y1={30} x2={150} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* LED */}
      <polygon points="150,20 150,40 175,30" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={175} y1={20} x2={175} y2={40} stroke="currentColor" strokeWidth={2} />
      <line x1={175} y1={30} x2={240} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* light arrows */}
      <line x1={168} y1={18} x2={175} y2={8} stroke="#c62828" strokeWidth={1} />
      <polygon points="175,8 170,11 173,15" fill="#c62828" />
      <line x1={175} y1={15} x2={182} y2={5} stroke="#c62828" strokeWidth={1} />
      <polygon points="182,5 177,8 180,12" fill="#c62828" />
      {/* bottom return */}
      <line x1={240} y1={30} x2={240} y2={80} stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={80} x2={40} y2={80} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={80} x2={40} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* battery */}
      <line x1={30} y1={45} x2={50} y2={45} stroke="currentColor" strokeWidth={2.5} />
      <line x1={33} y1={55} x2={47} y2={55} stroke="currentColor" strokeWidth={2} />
      {/* labels */}
      <text x={95} y={20} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R_v</text>
      <text x={162} y={50} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">LED</text>
      {/* formula */}
      <text x={140} y={105} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">R_v = (U_bron − U_led) / I_led</text>
      <text x={140} y={120} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Bijv. (9V − 2V) / 20mA = 350Ω</text>
    </svg>
  ),

  /* ── 41  Relais ───────────────────────────────────────────── */
  41: (
    <svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* coil side */}
      <rect x={30} y={25} width={80} height={60} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="4 3" rx={3} />
      <text x={70} y={20} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Spoel</text>
      {/* coil symbol */}
      <line x1={50} y1={35} x2={50} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <path d="M50,40 Q58,42 58,48 Q58,54 50,56 Q58,58 58,64 Q58,70 50,72" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <line x1={50} y1={72} x2={50} y2={80} stroke="currentColor" strokeWidth={1.5} />
      {/* coil terminals */}
      <line x1={50} y1={35} x2={50} y2={25} stroke="currentColor" strokeWidth={1.5} />
      <line x1={50} y1={80} x2={50} y2={90} stroke="currentColor" strokeWidth={1.5} />
      {/* dashed coupling line */}
      <line x1={90} y1={55} x2={160} y2={55} stroke="currentColor" strokeWidth={1} strokeDasharray="3 3" />
      {/* switch side */}
      <rect x={160} y={25} width={80} height={60} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="4 3" rx={3} />
      <text x={200} y={20} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Contact</text>
      {/* switch: common terminal */}
      <circle cx={180} cy={65} r={3} fill="currentColor" />
      <line x1={180} y1={68} x2={180} y2={85} stroke="currentColor" strokeWidth={1.5} />
      {/* NO contact */}
      <circle cx={220} cy={45} r={3} fill="currentColor" />
      <line x1={220} y1={48} x2={220} y2={85} stroke="currentColor" strokeWidth={1.5} />
      {/* arm */}
      <line x1={183} y1={65} x2={217} y2={48} stroke="currentColor" strokeWidth={1.5} />
      {/* labels */}
      <text x={175} y={100} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      <text x={220} y={100} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">NO</text>
      <text x={140} y={120} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Relais: elektrisch geschakeld contact</text>
    </svg>
  ),

  /* ── 42  Zekering ─────────────────────────────────────────── */
  42: (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={40} y1={45} x2={100} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <line x1={180} y1={45} x2={240} y2={45} stroke="currentColor" strokeWidth={1.5} />
      {/* fuse body (rectangle) */}
      <rect x={100} y={35} width={80} height={20} rx={3} fill="none" stroke="currentColor" strokeWidth={1.5} />
      {/* thin wire inside */}
      <line x1={110} y1={45} x2={170} y2={45} stroke="currentColor" strokeWidth={0.8} />
      {/* or the IEC symbol: S-curve */}
      <text x={140} y={75} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Zekering (fuse)</text>
      <text x={140} y={90} fontSize={9} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">Smelt bij te hoge stroom</text>
    </svg>
  ),

  /* ── 44  Aardlekschakelaar ────────────────────────────────── */
  44: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* two parallel wires (L and N) */}
      <line x1={30} y1={30} x2={250} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={30} y1={60} x2={250} y2={60} stroke="currentColor" strokeWidth={1.5} />
      <text x={20} y={34} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">L</text>
      <text x={20} y={64} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">N</text>
      {/* current transformer (toroid) around both */}
      <ellipse cx={140} cy={45} rx={30} ry={25} stroke="currentColor" strokeWidth={1.5} fill="none" />
      {/* differential detector */}
      <line x1={140} y1={70} x2={140} y2={90} stroke="currentColor" strokeWidth={1.5} />
      <rect x={125} y={90} width={30} height={15} fill="none" stroke="currentColor" strokeWidth={1.5} rx={2} />
      <text x={140} y={101} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">ΔI?</text>
      {/* trip mechanism */}
      <line x1={140} y1={105} x2={140} y2={115} stroke="currentColor" strokeWidth={1.5} />
      <text x={140} y={125} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">→ schakel UIT</text>
      {/* arrows showing equal currents */}
      <polygon points="80,26 90,30 80,34" fill="#c62828" />
      <polygon points="80,56 90,60 80,64" fill="#1565c0" />
      <text x={70} y={48} fontSize={7} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">I_L = I_N?</text>
      <text x={140} y={138} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Detecteert lekstroom (I_L ≠ I_N)</text>
    </svg>
  ),

  /* ── 45  Schakelaar / drukknop ─────────────────────────────── */
  45: (
    <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* NO switch */}
      <text x={70} y={15} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">NO (maak)</text>
      <line x1={20} y1={45} x2={50} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={55} cy={45} r={3} fill="currentColor" />
      <line x1={58} y1={45} x2={90} y2={28} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={95} cy={45} r={3} fill="currentColor" />
      <line x1={98} y1={45} x2={130} y2={45} stroke="currentColor" strokeWidth={1.5} />
      {/* NC switch */}
      <text x={210} y={15} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">NC (breek)</text>
      <line x1={160} y1={45} x2={190} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={195} cy={45} r={3} fill="currentColor" />
      <line x1={198} y1={45} x2={225} y2={38} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={230} cy={45} r={3} fill="currentColor" />
      <line x1={233} y1={45} x2={260} y2={45} stroke="currentColor" strokeWidth={1.5} />
      {/* contact bar for NC */}
      <line x1={215} y1={32} x2={215} y2={38} stroke="currentColor" strokeWidth={1.5} />
      {/* push button symbol (NO) */}
      <text x={70} y={70} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle" fontWeight="bold">Drukknop</text>
      <line x1={20} y1={90} x2={50} y2={90} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={55} cy={90} r={3} fill="currentColor" />
      <line x1={58} y1={90} x2={90} y2={73} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={95} cy={90} r={3} fill="currentColor" />
      <line x1={98} y1={90} x2={130} y2={90} stroke="currentColor" strokeWidth={1.5} />
      {/* spring return indicator */}
      <line x1={74} y1={68} x2={74} y2={78} stroke="currentColor" strokeWidth={1} />
      <line x1={70} y1={68} x2={78} y2={68} stroke="currentColor" strokeWidth={1} />
    </svg>
  ),

  /* ── 46  Kwartskristal ────────────────────────────────────── */
  46: (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={60} y1={50} x2={110} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <line x1={170} y1={50} x2={220} y2={50} stroke="currentColor" strokeWidth={1.5} />
      {/* plates */}
      <line x1={110} y1={30} x2={110} y2={70} stroke="currentColor" strokeWidth={2} />
      <line x1={170} y1={30} x2={170} y2={70} stroke="currentColor" strokeWidth={2} />
      {/* crystal body (rectangle) */}
      <rect x={122} y={33} width={36} height={34} fill="none" stroke="currentColor" strokeWidth={1.5} />
      {/* label */}
      <text x={140} y={55} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Y</text>
      <text x={140} y={90} fontSize={9} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Kristaloscillator (precisie-freq.)</text>
    </svg>
  ),

  /* ── 47  Luidspreker ──────────────────────────────────────── */
  47: (
    <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* leads */}
      <line x1={50} y1={45} x2={100} y2={45} stroke="currentColor" strokeWidth={1.5} />
      <line x1={50} y1={65} x2={100} y2={65} stroke="currentColor" strokeWidth={1.5} />
      {/* speaker body */}
      <rect x={100} y={35} width={25} height={40} fill="none" stroke="currentColor" strokeWidth={1.5} />
      {/* cone */}
      <line x1={125} y1={35} x2={160} y2={15} stroke="currentColor" strokeWidth={1.5} />
      <line x1={125} y1={75} x2={160} y2={95} stroke="currentColor" strokeWidth={1.5} />
      <line x1={160} y1={15} x2={160} y2={95} stroke="currentColor" strokeWidth={1.5} />
      {/* sound waves */}
      <path d="M170,40 Q180,55 170,70" stroke="currentColor" strokeWidth={1} fill="none" />
      <path d="M180,30 Q195,55 180,80" stroke="currentColor" strokeWidth={1} fill="none" />
      {/* labels */}
      <text x={130} y={110} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">Luidspreker</text>
    </svg>
  ),

  /* ── 49  NPN transistor als schakelaar ─────────────────────── */
  49: (
    <svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* transistor symbol */}
      {/* base line */}
      <line x1={40} y1={70} x2={100} y2={70} stroke="currentColor" strokeWidth={1.5} />
      {/* base vertical bar */}
      <line x1={100} y1={45} x2={100} y2={95} stroke="currentColor" strokeWidth={2.5} />
      {/* collector */}
      <line x1={100} y1={55} x2={140} y2={30} stroke="currentColor" strokeWidth={1.5} />
      <line x1={140} y1={30} x2={140} y2={15} stroke="currentColor" strokeWidth={1.5} />
      {/* emitter with arrow */}
      <line x1={100} y1={85} x2={140} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <polygon points="130,102 140,110 128,110" fill="currentColor" />
      <line x1={140} y1={110} x2={140} y2={130} stroke="currentColor" strokeWidth={1.5} />
      {/* circle */}
      <circle cx={115} cy={70} r={25} stroke="currentColor" strokeWidth={1} fill="none" />
      {/* base resistor */}
      <rect x={55} y={64} width={25} height={12} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={67} y={62} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="middle">R_b</text>
      {/* load on collector */}
      <line x1={140} y1={15} x2={220} y2={15} stroke="currentColor" strokeWidth={1.5} />
      <rect x={180} y={15} width={12} height={30} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <text x={200} y={34} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif">Load</text>
      <line x1={220} y1={15} x2={220} y2={130} stroke="currentColor" strokeWidth={1.5} />
      <line x1={140} y1={130} x2={220} y2={130} stroke="currentColor" strokeWidth={1.5} />
      {/* V+ label */}
      <text x={186} y={12} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif" textAnchor="middle">V+</text>
      {/* ground */}
      <line x1={170} y1={130} x2={170} y2={137} stroke="currentColor" strokeWidth={1.5} />
      <line x1={160} y1={137} x2={180} y2={137} stroke="currentColor" strokeWidth={1} />
      <line x1={163} y1={140} x2={177} y2={140} stroke="currentColor" strokeWidth={1} />
      <line x1={166} y1={143} x2={174} y2={143} stroke="currentColor" strokeWidth={1} />
      {/* labels */}
      <text x={30} y={74} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">B</text>
      <text x={148} y={25} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">C</text>
      <text x={148} y={120} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">E</text>
    </svg>
  ),

  /* ── 54  MOSFET (N-channel) ───────────────────────────────── */
  54: (
    <svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* gate line */}
      <line x1={40} y1={65} x2={90} y2={65} stroke="currentColor" strokeWidth={1.5} />
      <line x1={90} y1={35} x2={90} y2={95} stroke="currentColor" strokeWidth={2} />
      {/* insulation gap */}
      <line x1={98} y1={35} x2={98} y2={95} stroke="currentColor" strokeWidth={1} strokeDasharray="2 2" />
      {/* channel */}
      <line x1={105} y1={40} x2={105} y2={55} stroke="currentColor" strokeWidth={1.5} />
      <line x1={105} y1={60} x2={105} y2={75} stroke="currentColor" strokeWidth={1.5} />
      <line x1={105} y1={80} x2={105} y2={95} stroke="currentColor" strokeWidth={1.5} />
      {/* drain */}
      <line x1={105} y1={40} x2={140} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <line x1={140} y1={40} x2={140} y2={15} stroke="currentColor" strokeWidth={1.5} />
      {/* source */}
      <line x1={105} y1={90} x2={140} y2={90} stroke="currentColor" strokeWidth={1.5} />
      <line x1={140} y1={90} x2={140} y2={115} stroke="currentColor" strokeWidth={1.5} />
      {/* body arrow (N-channel enhancement) */}
      <line x1={105} y1={65} x2={140} y2={65} stroke="currentColor" strokeWidth={1.5} />
      <polygon points="125,60 135,65 125,70" fill="currentColor" />
      {/* body connected to source */}
      <line x1={140} y1={65} x2={140} y2={90} stroke="currentColor" strokeWidth={1.5} />
      {/* circle */}
      <circle cx={112} cy={65} r={28} stroke="currentColor" strokeWidth={1} fill="none" />
      {/* labels */}
      <text x={30} y={69} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">G</text>
      <text x={148} y={20} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif">D</text>
      <text x={148} y={112} fontSize={10} fill="currentColor" fontFamily="system-ui, sans-serif">S</text>
      <text x={200} y={50} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">N-kanaal</text>
      <text x={200} y={65} fontSize={9} fill="currentColor" fontFamily="system-ui, sans-serif">MOSFET</text>
      <text x={200} y={80} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif">Spanning-gestuurd</text>
    </svg>
  ),

  /* ── 56  Flyback-diode ────────────────────────────────────── */
  56: (
    <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="kr-esvg">
      {/* circuit */}
      <line x1={40} y1={20} x2={120} y2={20} stroke="currentColor" strokeWidth={1.5} />
      <line x1={120} y1={20} x2={120} y2={30} stroke="currentColor" strokeWidth={1.5} />
      {/* relay/motor coil */}
      <rect x={108} y={30} width={24} height={50} fill="none" stroke="currentColor" strokeWidth={1.5} rx={2} />
      <path d="M120,35 Q128,38 128,43 Q128,48 120,51 Q128,54 128,59 Q128,64 120,67 Q128,70 128,75" stroke="currentColor" strokeWidth={1} fill="none" />
      <text x={100} y={58} fontSize={8} fill="currentColor" fontFamily="system-ui, sans-serif" textAnchor="end">Spoel</text>
      <line x1={120} y1={80} x2={120} y2={110} stroke="currentColor" strokeWidth={1.5} />
      {/* flyback diode across coil */}
      <line x1={120} y1={25} x2={180} y2={25} stroke="currentColor" strokeWidth={1.5} />
      <line x1={180} y1={25} x2={180} y2={45} stroke="currentColor" strokeWidth={1.5} />
      {/* diode */}
      <polygon points="170,55 190,55 180,45" fill="none" stroke="#c62828" strokeWidth={1.5} />
      <line x1={170} y1={45} x2={190} y2={45} stroke="#c62828" strokeWidth={2} />
      <line x1={180} y1={55} x2={180} y2={85} stroke="currentColor" strokeWidth={1.5} />
      <line x1={120} y1={85} x2={180} y2={85} stroke="currentColor" strokeWidth={1.5} />
      {/* switch */}
      <line x1={40} y1={20} x2={40} y2={60} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={40} cy={65} r={3} fill="currentColor" />
      <line x1={43} y1={65} x2={55} y2={50} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={40} cy={80} r={3} fill="currentColor" />
      <line x1={40} y1={83} x2={40} y2={110} stroke="currentColor" strokeWidth={1.5} />
      <line x1={40} y1={110} x2={120} y2={110} stroke="currentColor" strokeWidth={1.5} />
      {/* label */}
      <text x={195} y={52} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">Flyback</text>
      <text x={195} y={63} fontSize={8} fill="#c62828" fontFamily="system-ui, sans-serif">diode</text>
      <text x={140} y={130} fontSize={8} fill="#1565c0" fontFamily="system-ui, sans-serif" textAnchor="middle">Beschermt tegen inductiepiek</text>
    </svg>
  ),
}
