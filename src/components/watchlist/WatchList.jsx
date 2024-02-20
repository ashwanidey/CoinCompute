import React from 'react'
import { Table2 } from '../home/Table2'

export const WatchList = () => {
  return (
    <div className='xl:mx-[70px] mx-2 mb-[5rem] flex flex-col items-center'>
      <div className='font-[900] text-[2rem] uppercase md:mt-10 mt-4'>Watch List</div>
      <div className='w-full mt-5'>
      <Table2 />
      </div>
    </div>
  )
}
