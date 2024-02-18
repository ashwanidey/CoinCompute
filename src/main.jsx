import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { CryptoProvider } from './context/CryptoContext.jsx'
import { SizeProvider } from './context/ScreenSize.jsx'
import { StorageProvider } from './context/StorageContext.jsx'
import { GlobalDataContext, GlobalDataProvider } from './context/GlobalDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoProvider>
      <SizeProvider>
        <StorageProvider>
          <GlobalDataProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GlobalDataProvider>

    </StorageProvider>
    </SizeProvider>
    </CryptoProvider>
  </React.StrictMode>,
)
