import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom"
import Pnl from "./components/pnl/Pnl"
import TargetPrice from "./components/target_price/TargetPrice"
import Liquidation from './components/liquidation price/Liquidation'
import MaxOpen from './components/max_open/MaxOpen'


function App() {
  

 

  return (
    <>
    <body class="flex sm:flex-row flex-col">
      <NavBar/>
      
      <Routes>
      <Route path="/" element={<Pnl/>} />
      <Route path="/pnl" element={<Pnl/>} />
      <Route path="/targetPrice" element={<TargetPrice />} />
      <Route path="/liquidationPrice" element={<Liquidation />} />
      <Route path="/maxOpen" element={<MaxOpen />} />
      <Route path="/OpenPrice" element={<TargetPrice />} />
      </Routes>
    
      
      
      
    
    </body>
    
    
        
    </>
  )
}

export default App
