import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import DesignerContextProvider, { DesignerContext } from './context/DesignerContext.jsx'
import {Home} from './Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Designer' element={<DesignerContextProvider>
    <App />
    </DesignerContextProvider>}/>
       </Routes>


    </BrowserRouter>
  
  </StrictMode>,
)
