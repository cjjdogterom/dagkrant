// Nieuwskoppen via de eigen serverless-functie (/api/nieuws), die de NOS-RSS
// ophaalt en parseert. Klik je een kop, dan haalt /api/artikel het hele artikel.
// Faalt dit (bv. lokaal zonder Vercel-functies), dan valt de rubriek netjes terug.

export type NieuwsItem = {
  titel: string
  link: string
  datum?: string
}

export type Artikel = {
  titel: string
  samenvatting: string
  alineas: string[]
  bron: string
}

export async function haalNieuws(): Promise<NieuwsItem[] | null> {
  try {
    const res = await fetch('/api/nieuws')
    if (!res.ok) return null
    const data = await res.json()
    if (!Array.isArray(data?.items)) return null
    return data.items.slice(0, 6)
  } catch {
    return null
  }
}

export async function haalArtikel(url: string): Promise<Artikel | null> {
  try {
    const res = await fetch(`/api/artikel?url=${encodeURIComponent(url)}`)
    if (!res.ok) return null
    const data = await res.json()
    if (!data || (!Array.isArray(data.alineas) && !data.samenvatting)) return null
    return { titel: data.titel ?? '', samenvatting: data.samenvatting ?? '', alineas: data.alineas ?? [], bron: data.bron ?? url }
  } catch {
    return null
  }
}
