import { useContext, useState } from 'react'
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

import { CryptoContext } from './context/CryptoContext'
import { CryptoDetails } from './components/tracker/crypto-details/CryptoDetails'
import { Home } from './components/home/Home'
import { News } from './components/news/News'
import { BottomNav } from './components/BottomNav'
import { ScreenSizeContext } from './context/ScreenSize'




function App() {
  
  const {size400} = useContext(ScreenSizeContext)

  return (
    <>
    
      <TopNavBar/>
      
      
      <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/home" element = {<Home/>}></Route>
      <Route path = "/news" element = {<News/>}></Route>
      <Route path = "/calculator" element={<div class="flex sm:flex-row flex-col"><NavBar/><Pnl/></div>}/>
      <Route path="/tracker" element={<Tracker/>} />
      <Route path="/tracker/:coinId" element={<CryptoDetails/>} />
       
      <Route path="/calculator/pnl" element={<div class="flex sm:flex-row flex-col "><NavBar/><Pnl/></div>} />
      <Route path="/calculator/targetPrice" element={<div class="flex sm:flex-row flex-col"><NavBar/><TargetPrice /></div>} />
      <Route path="/calculator/liquidationPrice" element={<div class="flex sm:flex-row flex-col"><NavBar/><Liquidation /></div>} />
      <Route path="/calculator/maxOpen" element={<div class="flex sm:flex-row flex-col"><NavBar/><MaxOpen /></div>} />
      <Route path="/calculator/OpenPrice" element={<div class="flex sm:flex-row flex-col"><NavBar/><OpenPrice /></div>} />
     
      </Routes>

      {!size400  &&<BottomNav/>}

 
      
    
      
      
      
    
    
    
    
        
    </>
  )
}

export default App
