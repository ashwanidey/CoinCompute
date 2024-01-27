import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PnlForm from './components/PnlForm'
import Result from './components/Result'
import NavBar from './components/NavBar'
import Pnl from './components/pnl/Pnl'
import TargetPrice from './components/target_price/TargetPrice'


function App() {
  

 

  return (
    <>
    <body class="flex sm:flex-row flex-col">
      <NavBar/>
      {/* <Pnl/> */}
      <TargetPrice/>
      
      
    
    </body>
    
    
        
    </>
  )
}

export default App
