// Nieuwskoppen via de eigen serverless-functie (/api/nieuws), die de NOS-RSS
// ophaalt en parseert. Faalt dit (bv. lokaal zonder Vercel-functies), dan
// geeft de rubriek netjes een terugvaloptie.

export type NieuwsItem = {
  titel: string
  link: string
  datum?: string
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
