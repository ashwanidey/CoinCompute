import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { CryptoProvider } from './context/CryptoContext.jsx'
import { SizeProvider } from './context/ScreenSize.jsx'
import { StorageProvider } from './context/StorageContext.jsx'
import { GlobalDataContext, GlobalDataProvider } from './context/GlobalDataContext.jsx'
import { CryptoNewsProvider } from './context/CryptoNewsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoProvider>
      <SizeProvider>
        <StorageProvider>
          <GlobalDataProvider>
            <CryptoNewsProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CryptoNewsProvider>
    </GlobalDataProvider>

    </StorageProvider>
    </SizeProvider>
    </CryptoProvider>
  </React.StrictMode>,
)
