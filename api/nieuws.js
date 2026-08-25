// Vercel serverless-functie: haalt de NOS-nieuws-RSS op en geeft de koppen
// als JSON terug. Zo omzeilen we CORS en houden we de client simpel.

const FEED = 'https://feeds.nos.nl/nosnieuwsalgemeen'

function tussen(blok, tag) {
  const m = blok.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))
  if (!m) return ''
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
}

export default async function handler(req, res) {
  try {
    const rss = await fetch(FEED, { headers: { 'User-Agent': 'dagkrant/1.0' } })
    if (!rss.ok) {
      res.status(502).json({ error: 'feed niet bereikbaar', items: [] })
      return
    }
    const xml = await rss.text()
    const items = []
    const regex = /<item[\s\S]*?<\/item>/gi
    let m
    while ((m = regex.exec(xml)) && items.length < 8) {
      const blok = m[0]
      const titel = tussen(blok, 'title')
      const link = tussen(blok, 'link')
      const datum = tussen(blok, 'pubDate')
      if (titel && link) items.push({ titel, link, datum })
    }
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800')
    res.status(200).json({ items })
  } catch (e) {
    res.status(500).json({ error: String(e), items: [] })
  }
}
