// Live weer via Open-Meteo (gratis, geen API-sleutel, CORS-vriendelijk).

export type Weer = {
  plaats: string
  temp: number
  wind: number
  code: number
  omschrijving: string
  emoji: string
}

// Standaardlocatie; later instelbaar te maken.
export const STANDAARD_PLAATS = { naam: 'Amsterdam', lat: 52.37, lon: 4.9 }

// WMO weather-codes → Nederlandse omschrijving + emoji.
function duiding(code: number): { omschrijving: string; emoji: string } {
  const t = (o: string, e: string) => ({ omschrijving: o, emoji: e })
  if (code === 0) return t('Onbewolkt', '☀️')
  if (code === 1) return t('Overwegend zonnig', '🌤️')
  if (code === 2) return t('Half bewolkt', '⛅')
  if (code === 3) return t('Bewolkt', '☁️')
  if (code === 45 || code === 48) return t('Mist', '🌫️')
  if (code >= 51 && code <= 57) return t('Motregen', '🌦️')
  if (code >= 61 && code <= 67) return t('Regen', '🌧️')
  if (code >= 71 && code <= 77) return t('Sneeuw', '🌨️')
  if (code >= 80 && code <= 82) return t('Regenbuien', '🌧️')
  if (code === 85 || code === 86) return t('Sneeuwbuien', '🌨️')
  if (code >= 95) return t('Onweer', '⛈️')
  return t('Wisselend', '🌥️')
}

export async function haalWeer(
  plaats = STANDAARD_PLAATS.naam,
  lat = STANDAARD_PLAATS.lat,
  lon = STANDAARD_PLAATS.lon,
): Promise<Weer | null> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`
    const res = await fetch(url)
    if (!res.ok) return null
    const data = await res.json()
    const c = data?.current
    if (!c) return null
    const d = duiding(c.weather_code)
    return {
      plaats,
      temp: Math.round(c.temperature_2m),
      wind: Math.round(c.wind_speed_10m),
      code: c.weather_code,
      omschrijving: d.omschrijving,
      emoji: d.emoji,
    }
  } catch {
    return null
  }
}
