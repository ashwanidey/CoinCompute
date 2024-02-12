import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { CryptoProvider } from './context/CryptoContext.jsx'
import { SizeProvider } from './context/ScreenSize.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoProvider>
      <SizeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SizeProvider>
    </CryptoProvider>
  </React.StrictMode>,
)
