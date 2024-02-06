import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom"
import Pnl from "./components/pnl/Pnl"
import TargetPrice from "./components/target_price/TargetPrice"
import Liquidation from './components/liquidation price/Liquidation'
import MaxOpen from './components/max_open/MaxOpen'
import OpenPrice from './components/open-price/OpenPrice'
import TopNavBar from './components/TopNavBar'
import Tracker from './components/tracker/Tracker'




function App() {
  
  

  return (
    <>
   
      <TopNavBar/>
      
      
      <Routes>
        <Route path = "/calculator" element={<div class="flex sm:flex-row flex-col"><NavBar/><Pnl/></div>}/>
      <Route path="/" element={<Tracker/>} />
      <Route path="/calculator/pnl" element={<div class="flex sm:flex-row flex-col"><NavBar/><Pnl/></div>} />
      <Route path="/calculator/targetPrice" element={<div class="flex sm:flex-row flex-col"><NavBar/><TargetPrice /></div>} />
      <Route path="/calculator/liquidationPrice" element={<div class="flex sm:flex-row flex-col"><NavBar/><Liquidation /></div>} />
      <Route path="/calculator/maxOpen" element={<div class="flex sm:flex-row flex-col"><NavBar/><MaxOpen /></div>} />
      <Route path="/calculator/OpenPrice" element={<div class="flex sm:flex-row flex-col"><NavBar/><OpenPrice /></div>} />
      </Routes>
    
      
      
      
    
    
    
    
        
    </>
  )
}

export default App
