import React, { useContext } from 'react'
import { GlobalDataContext } from '../../context/GlobalDataContext'
import { TopCoins } from './TopCoins'
import { StorageContext } from '../../context/StorageContext'
import millify from 'millify'
import { ScreenSizeContext } from '../../context/ScreenSize'
import { NewsSlider } from '../news/NewsSlider'
import { WatchList } from './WatchList'

const Card = ({data,label,prefixsymbol,suffixSymbol}) => {
  return (
  <div className='flex  w-full flex-col p-3 bg-[#f1f6ff] rounded-lg' style={{boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
      <div className='font-[800] text-[1.1rem] uppercase'>{label}</div>
      <div className='font-[600] text-[1.5rem]'>{prefixsymbol}{!data ? "-" : Number(data).toLocaleString()}{suffixSymbol}</div>
    </div>
  )
}

export const HomeHeader = () => {

  const {globalData} = useContext(GlobalDataContext);
  const {size400} = useContext(ScreenSizeContext)
  return (
    <>
    
    <div className='flex gap-3 md:flex-row flex-col' >
    <Card data = {globalData.totalMarketCap} label={"market Cap"} prefixsymbol="$"/>
    <Card data = {globalData.total24hVolume} label={"24h Volume"} prefixsymbol="$"/>
    {size400 && <Card data = {millify(globalData.btcDominance)} label={"Bitcoin dominance"} suffixSymbol=" %"/> }
    {size400 && <Card data = {globalData.totalCoins} label={"Total Coins"} /> }
    </div>
   
    </>
  )
}
