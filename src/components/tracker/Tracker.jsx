import React from 'react'
import InfoTable from './InfoTable'
import { CryptoProvider } from '../../context/CryptoContext'
import ControlBar from './ControlBar'
import { Outlet } from '@mui/icons-material'
import { Table2 } from '../table/Table2'


const Tracker = () => {
  return (
    <>
   <div className=' lg:mt-0 mt-[-1rem] mb-[5rem]'>
    <CryptoProvider>
      <div className='mt-10 lg:ml-[2rem] lg:mr-[2rem] ml-[0.5rem]  mr-[0.5rem]'>
    <ControlBar/>
    <div >
    <InfoTable/>
    {/* <Table2/> */}
    </div>
    </div>
    </CryptoProvider>
    </div>
    </>
    
  )
}

export default Tracker