import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DesignerContextProvider, { DesignerContext } from './context/DesignerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <DesignerContextProvider>
    <App />
    </DesignerContextProvider>
  
  </StrictMode>,
)
