import React from 'react'
import { WatchList } from './WatchList'
import { InvestWidget } from './InvestWidget'
import { HomeHeader } from './Header'


export const Home = () => {
  return (
    <>
    <div>
      <HomeHeader/>
    <WatchList/>
    </div>
    </>
  )
}
