import { useContext, useState } from 'react'
import './App.css'
/* The following line can be included in your src/index.js or App.js file */
import "bootstrap/dist/css/bootstrap.min.css";
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
import DiscordBot from './components/discordBot/DiscordBot'
import BotHome from './components/discordBot/BotHome';




function App() {
  
  const {size900} = useContext(ScreenSizeContext)

  return (
    <>
    
      
      
      
      <Routes>
      <Route path = "/" element = {<div><TopNavBar/><Home/></div>}></Route>
      <Route path = "/home" element = {<div><TopNavBar/><Home/></div>}></Route>
      <Route path = "/news" element = {<div><TopNavBar/><News/></div>}></Route>
      <Route path = "/watchlist" element = {<div><TopNavBar/><WatchList/></div>}></Route>
      <Route path = "/calculator" element={<><TopNavBar/><div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><Pnl/></div></>}/>
      <Route path="/tracker" element={<div><TopNavBar/><Tracker/></div>} />
      <Route path="/tracker/:coinId" element={<div><TopNavBar/><CryptoDetails/></div>} />
      <Route path='/discordBot' element ={<div><DiscordBot/><BotHome/></div>}/>
      <Route path='/discordBot/commands' element ={<DiscordBot/>}/>
        

       
      <Route path="/calculator/pnl" element={<><TopNavBar/><div class="flex sm:flex-row flex-col mb-[5rem] "><NavBar/><Pnl/></div></>} />
      <Route path="/calculator/targetPrice" element={<><TopNavBar/><div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><TargetPrice /></div></>} />
      <Route path="/calculator/liquidationPrice" element={<><TopNavBar/><div class="flex sm:flex-row flex-col mb-[5rem] "><NavBar/><Liquidation /></div></>} />
      <Route path="/calculator/maxOpen" element={<><TopNavBar/><div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><MaxOpen /></div></>} />
      <Route path="/calculator/OpenPrice" element={<><TopNavBar/><div class="flex sm:flex-row flex-col mb-[5rem]"><NavBar/><OpenPrice /></div></>} />
     
      </Routes>

      {!size900  &&<BottomNav/>}

 
      
    
      
      
      
    
    
    
    
        
    </>
  )
}

export default App
