import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import DesignerContextProvider, { DesignerContext } from './context/DesignerContext.jsx'
import {Home} from './Home.jsx'
import { Provider } from 'react-redux';
import store from './store'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Designer/:path' element={<DesignerContextProvider>
    <App />
    </DesignerContextProvider>}/>
       </Routes>
 {/* testing something */}

    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
