import React from 'react'
import './bot.css'
import tradeImage from "../../assets/Screenshot 2024-03-30 132602.png"
import chartImage from "../../assets/chart.png"


const features = [
  {heading : "Extensive Asset Data", details : "Access information on over 7000 publicly traded cryptocurrencies." },
  {heading : "Real-time Updates", details : "Stay updated with real-time price, volume, and market data." },
  {heading : "Proprietary Trading System", details : "Simulate real-life trading scenarios to enhance your trading experience." },
  {heading : "User-friendly Interface", details : "Enjoy a seamless and intuitive interface for easy navigation and usage." },
]

const featureCard = [
  {
    heading : 'Trading Simulator' , detail : 'Use cct to spin up the trading simulator' , imgPath : tradeImage, imgWidth : "400px",imgmargin : "0px"
  },
  {
    heading : 'Crypto Charts' , detail : 'Use ccc [symbolName] to view the chart of the preferred cryptocurrency' , imgPath : chartImage, imgWidth : "600px",imgmargin : "-40px"
  },
]


const BotHome = () => {
  return (
    <>
    <div className='py-[10px] px-[5%] '>
    <div className=' flex flex-col justify-center gap-4'>
    <h1 className='font-[700] text-center ' style={{fontSize: "clamp(2.5rem, 4vw, 5rem)"}}>Ultimate Discord bot for accessing comprehensive cryptocurrency data.</h1>

    <p className='text-[20px] font-[400] text-center '>Stay updated with real-time price, volume, and market data.</p>
    <a href="https://discord.com/oauth2/authorize?client_id=1217553379690025101&permissions=8&scope=bot+applications.commands" className='flex justify-center'><button class="button-27 max-w-[140px]  " role="button">Invite Bot</button></a>
    </div>


    {/* Features Section*/}
    <div className=' flex lg:flex-row flex-col gap-5 mt-[50px]'>


      {features.map(feature => {
        return(
        <div className='flex flex-col gap-2'>
        <h2 className='font-[700] text-center text-[1.5rem] md:text-[1.8rem]' >{feature.heading}</h2>
        <p className='text-center font-[500]'>{feature.details}</p>
      </div>
        )
      })}
      
    </div>

    
    
    </div>
    {/* Card */}
    <section className='flex sm:flex-row flex-col gap-10 bg-[#f8fafd] px-[5%] py-[30px] justify-center sm:justify-evenly mt-10  md:mb-[0px] mb-[100px]' >
      {featureCard.map(card => {
        return(
          <div className='bg-white p-[20px] rounded-[30px] sm:min-w-[40%] sm:max-w-[40%] flex flex-col gap-2'>
            <h1 className='font-[700] text-[2rem]'>{card.heading}</h1>
            <p className='text-[1.2rem] max-w-[80%]'>{card.detail}</p>
            <div className='mt-3 flex justify-center ' style={{marginLeft:card.imgmargin}}>
            <img src={card.imgPath} alt="" width={card.imgWidth}/>
            </div>
        </div>
        )
      })}
      
    </section>
    </>
  )
}

export default BotHome