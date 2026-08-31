// Haalt een representatieve foto op via de Wikipedia-API (pageimages), op basis
// van een titel (Latijnse of Nederlandse naam). CORS-vriendelijk (origin=*).
// Resultaten worden gecachet zodat dezelfde plant niet twee keer laadt.

const cache = new Map<string, string | null>()

async function wiki(titel: string, taal: 'nl' | 'en'): Promise<string | null> {
  const sleutel = `${taal}:${titel}`
  if (cache.has(sleutel)) return cache.get(sleutel) ?? null
  try {
    const url =
      `https://${taal}.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1` +
      `&prop=pageimages&piprop=thumbnail&pithumbsize=520&titles=${encodeURIComponent(titel)}`
    const res = await fetch(url)
    if (!res.ok) {
      cache.set(sleutel, null)
      return null
    }
    const data = await res.json()
    const pages = data?.query?.pages ?? {}
    for (const k of Object.keys(pages)) {
      const bron = pages[k]?.thumbnail?.source
      if (bron) {
        cache.set(sleutel, bron)
        return bron
      }
    }
    cache.set(sleutel, null)
    return null
  } catch {
    cache.set(sleutel, null)
    return null
  }
}

// Probeer Latijnse naam (nl) → Nederlandse naam (nl) → Latijnse naam (en).
export async function haalPlantFoto(latijn: string, naam: string): Promise<string | null> {
  return (await wiki(latijn, 'nl')) ?? (await wiki(naam, 'nl')) ?? (await wiki(latijn, 'en'))
}
