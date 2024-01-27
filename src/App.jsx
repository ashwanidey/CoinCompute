import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PnlForm from './components/PnlForm'
import Result from './components/Result'
import NavBar from './components/NavBar'
import Pnl from './components/pnl/Pnl'


function App() {
  

 

  return (
    <>
    <body class="flex sm:flex-row flex-col">
      <NavBar/>
      <Pnl/>
      
    
    </body>
    
    
        
    </>
  )
}

export default App
