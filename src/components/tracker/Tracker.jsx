import React from 'react'
import InfoTable from './InfoTable'
import { CryptoProvider } from '../../context/CryptoContext'
import ControlBar from './ControlBar'


const Tracker = () => {
  return (
    <>

    <CryptoProvider>
      <div className='mt-10 ml-[2rem] mr-[2rem]'>
    <ControlBar/>
    <InfoTable/>
    </div>
    </CryptoProvider>
    </>
    
  )
}

export default Tracker