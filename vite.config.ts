import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // react-simple-maps (v3) is CommonJS en vraagt prop-types op; expliciet
    // pre-bundelen voorkomt de "require in ESM"-fout.
    include: ['react-simple-maps', 'prop-types', 'd3-geo', 'topojson-client'],
  },
})
