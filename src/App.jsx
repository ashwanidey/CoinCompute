import { useContext, useState } from 'react'
import './App.css'
import NavBar from './components/navbars/NavBar'
import { Route, Routes } from "react-router-dom"
import Pnl from "./components/calculator/pnl/Pnl"
import TargetPrice from "./components/calculator/targetPrice/TargetPrice"
import Liquidation from './components/calculator/liquidationPrice/Liquidation'
import MaxOpen from './components/calculator/maxOpen/MaxOpen'
import OpenPrice from './components/calculator/openPrice/OpenPrice'
import TopNavBar from './components/navbars/TopNavBar'
import Tracker from './components/tracker/Tracker'
import { CryptoDetails } from './components/tracker/crypto-details/CryptoDetails'
import { Home } from './components/home/Home'
import { News } from './components/news/News'
import { BottomNav } from './components/navbars/BottomNav'
import { ScreenSizeContext } from './context/ScreenSize'
import { WatchList } from './components/watchlist/WatchList'




function App() {
  
  const {size900} = useContext(ScreenSizeContext)

  return (
    <>
    
      <TopNavBar/>
      
      
      <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/home" element = {<Home/>}></Route>
      <Route path = "/news" element = {<News/>}></Route>
      <Route path = "/watchlist" element = {<WatchList/>}></Route>
      <Route path = "/calculator" element={<div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><Pnl/></div>}/>
      <Route path="/tracker" element={<Tracker/>} />
      <Route path="/tracker/:coinId" element={<CryptoDetails/>} />
       
      <Route path="/calculator/pnl" element={<div class="flex sm:flex-row flex-col mb-[5rem] "><NavBar/><Pnl/></div>} />
      <Route path="/calculator/targetPrice" element={<div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><TargetPrice /></div>} />
      <Route path="/calculator/liquidationPrice" element={<div class="flex sm:flex-row flex-col mb-[5rem] "><NavBar/><Liquidation /></div>} />
      <Route path="/calculator/maxOpen" element={<div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><MaxOpen /></div>} />
      <Route path="/calculator/OpenPrice" element={<div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><OpenPrice /></div>} />
     
      </Routes>

      {!size900  &&<BottomNav/>}

 
      
    
      
      
      
    
    
    
    
        
    </>
  )
}

export default App
