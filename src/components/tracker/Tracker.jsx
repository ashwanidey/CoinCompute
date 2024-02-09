import React from 'react'
import InfoTable from './InfoTable'
import { CryptoProvider } from '../../context/CryptoContext'


const Tracker = () => {
  return (
    <>

    <CryptoProvider>
    <InfoTable/>
    </CryptoProvider>
    </>
    
  )
}

export default Tracker