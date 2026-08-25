import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Krant from './krant/Krant'
import { VoortgangProvider } from './krant/store'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VoortgangProvider>
      <Krant />
    </VoortgangProvider>
  </StrictMode>,
)
