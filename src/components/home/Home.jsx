import React from 'react'
import { WatchList } from './WatchList'
import { InvestWidget } from './InvestWidget'
import { HomeHeader } from './Header'
import { News } from './News'


export const Home = () => {
  return (
    <>
    <div className='xl:mx-[70px] mx-0'>
      <HomeHeader/>
    <WatchList/>
    <News/>
    </div>
    </>
  )
}
