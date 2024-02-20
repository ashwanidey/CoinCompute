import React, { useState } from 'react'
import { WatchList } from './WatchList'
import { InvestWidget } from './InvestWidget'
import { HomeHeader } from './Header'
import { News } from '../news/News'
import { TopCoins } from './TopCoins'
import { NewsSlider } from '../news/NewsSlider'
import Switcher4 from './ToggleSwitch'


export const Home = () => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  
  return (
    <>
    <div className='xl:mx-[70px] mx-0'>
      
    <div className='m-[20px] '>
      <div className='w-full flex justify-center mb-3'>
    <div className='md:text-[2rem] font-[900] text-[1.2rem] uppercase '>Today's Cryptocurrency Prices </div>
    </div>
    <div className='flex w-full justify-end '>
      <span className='font-[600] text-[1rem] mr-3 ' >Highlights</span>
    <Switcher4 handleCheckboxChange = {handleCheckboxChange} isChecked={isChecked} />
    </div>
    {isChecked && <HomeHeader/>}
    <div className='flex md:flex-row flex-col gap-[2%]'>
    <div className='flex flex-col md:w-[49%] justify-between h-full'>
    {isChecked && <TopCoins/>}
    <WatchList/>
    </div>
    <NewsSlider/>
    </div>
    
    </div>
    </div>
    </>
  )
}
