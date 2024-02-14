import React from 'react'
import InfoTable from './InfoTable'
import { CryptoProvider } from '../../context/CryptoContext'
import ControlBar from './ControlBar'
import { Outlet } from '@mui/icons-material'


const Tracker = () => {
  return (
    <>
   <div className=' lg:mt-0 mt-[-1rem] '>
    <CryptoProvider>
      <div className='mt-10 lg:ml-[2rem] lg:mr-[2rem] ml-[0.5rem]  mr-[0.5rem]'>
    <ControlBar/>
    <div >
    <InfoTable/>
    </div>
    </div>
    </CryptoProvider>
    </div>
    </>
    
  )
}

export default Tracker