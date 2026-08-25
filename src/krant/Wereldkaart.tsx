import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import worldGeoUrl from 'world-atlas/countries-110m.json?url'

// Kleine wereldkaart met één markering op de opgegeven locatie.
export default function Wereldkaart({ lat, lon }: { lat: number; lon: number }) {
  return (
    <div className="kr-kaart">
      <ComposableMap projectionConfig={{ scale: 150 }} width={800} height={400} style={{ width: '100%', height: 'auto' }}>
        <Geographies geography={worldGeoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e2e8f0"
                stroke="#c3cdd8"
                strokeWidth={0.4}
                style={{ default: { outline: 'none' }, hover: { outline: 'none', fill: '#e2e8f0' }, pressed: { outline: 'none' } }}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[lon, lat]}>
          <circle r={9} fill="#c1121f" stroke="#fff" strokeWidth={2} opacity={0.85} />
          <circle r={3} fill="#fff" />
        </Marker>
      </ComposableMap>
    </div>
  )
}
