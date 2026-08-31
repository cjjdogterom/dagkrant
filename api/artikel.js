// Vercel serverless-functie: haalt één NOS-artikel op en geeft de tekst als
// JSON terug, zodat de krant het artikel zelf kan tonen i.p.v. alleen een link.
// Alleen nos.nl is toegestaan (tegen SSRF-misbruik).

function decode(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&eacute;/g, 'é')
    .replace(/&euro;/g, '€')
    .replace(/\s+/g, ' ')
    .trim()
}

function meta(html, prop) {
  const m =
    html.match(new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["']`, 'i')) ||
    html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${prop}["']`, 'i'))
  return m ? decode(m[1]) : ''
}

export default async function handler(req, res) {
  const url = req.query?.url || ''
  let host
  try {
    host = new URL(url).hostname
  } catch {
    res.status(400).json({ error: 'ongeldige url' })
    return
  }
  if (!(host === 'nos.nl' || host.endsWith('.nos.nl'))) {
    res.status(400).json({ error: 'alleen nos.nl toegestaan' })
    return
  }

  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (dagkrant nieuwslezer)' } })
    if (!r.ok) {
      res.status(502).json({ error: 'artikel niet bereikbaar' })
      return
    }
    const html = await r.text()

    const titel = meta(html, 'og:title') || decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '')
    const samenvatting = meta(html, 'og:description')

    // Alle alinea's; filter op lengte en boilerplate.
    const alineas = []
    const seen = new Set()
    const rx = /<p[^>]*>([\s\S]*?)<\/p>/gi
    let m
    while ((m = rx.exec(html))) {
      const t = decode(m[1])
      if (t.length < 45) continue
      if (/cookie|nieuwsbrief|volg ons|deel dit artikel|©|abonnee/i.test(t)) continue
      if (seen.has(t)) continue
      seen.add(t)
      alineas.push(t)
      if (alineas.length >= 40) break
    }

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600')
    res.status(200).json({ titel, samenvatting, alineas, bron: url })
  } catch (e) {
    res.status(500).json({ error: String(e) })
  }
}
