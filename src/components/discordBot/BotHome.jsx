import React from 'react'
import './bot.css'




const BotHome = () => {
  return (
    <>
    <div className='py-[10px] px-[5%]'>
    <div className=' flex flex-col justify-center gap-4'>
    <h1 className='text-[60px] font-[700] text-left'>Ultimate Discord bot for accessing comprehensive cryptocurrency data.</h1>
    <p className='text-[20px] font-[400] '>Stay updated with real-time price, volume, and market data.</p>
    <a href="https://discord.com/oauth2/authorize?client_id=1217553379690025101&permissions=8&scope=bot+applications.commands"><button class="button-27 max-w-[140px] " role="button">Invite Bot</button></a>
    </div>
    
    </div>
    </>
  )
}

export default BotHome