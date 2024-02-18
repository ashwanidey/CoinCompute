import React, { useContext } from 'react'
import { GlobalDataContext } from '../../context/GlobalDataContext'
import { TopCoins } from './TopCoins'

const Card = ({data,label}) => {
  return (
  <div className='flex  w-full flex-col p-3 bg-[#f1f6ff] rounded-lg'>
      <div className='font-[800] text-[1.1rem] uppercase'>{label}</div>
      <div className='font-[600] text-[1.5rem]'>${!data ? "-" : Number(data).toLocaleString()}</div>
    </div>
  )
}

export const HomeHeader = () => {

  const {globalData} = useContext(GlobalDataContext);
  // console.log(globalData)
  return (
    <>
   
    <div className='m-[20px] flex-col'>
      <div className='w-full flex justify-center mb-3'>
    <div className='md:text-[2rem] font-[900] text-[1.2rem] uppercase '>Today's Cryptocurrency Prices </div>
    </div>

    <div className='flex gap-3 md:flex-row flex-col' >
    <Card data = {globalData.totalMarketCap} label={"market Cap"}/>
    <Card data = {globalData.total24hVolume} label={"24h Volume"}/>
    </div>

    <TopCoins/>
    </div>
   
    </>
  )
}
