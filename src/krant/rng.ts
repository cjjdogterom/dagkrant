// Deterministische willekeur op basis van de datum: elke dag levert dezelfde
// "editie", maar elke rubriek kiest onafhankelijk. Zo is de krant stabiel als
// je 'm meerdere keren op dezelfde dag opent, en rolt hij elke dag door.

export function datumSleutel(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dag = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dag}`
}

export function parseDatum(sleutel: string): Date {
  const [y, m, d] = sleutel.split('-').map(Number)
  return new Date(y, m - 1, d)
}

// 32-bits hash (FNV-achtig) van een string.
function hash(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

// mulberry32 PRNG.
function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Kies deterministisch één item uit een lijst, gegeven datum + rubriek.
export function kiesVoor<T>(datum: string, rubriek: string, lijst: readonly T[]): T {
  const rng = mulberry32(hash(`${datum}::${rubriek}`))
  return lijst[Math.floor(rng() * lijst.length)]
}

// Een seeded generator voor een rubriek (voor het opbouwen van oefeningen met
// stabiele afleiders).
export function rngVoor(datum: string, rubriek: string): () => number {
  return mulberry32(hash(`${datum}::${rubriek}::quiz`))
}
