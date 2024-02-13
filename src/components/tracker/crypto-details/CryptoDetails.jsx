import React, { useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from '../../../context/CryptoContext';
import LinearProgress from '@mui/material/LinearProgress';


import { Header } from './Header';
import { Value } from './Value';
import { Supply } from './Supply';
import { LIneChart } from './LIneChart';

export const CryptoDetails = () => {
  let {coinId} = useParams();
  const {setCoinId,coinData,loadingCoin} = useContext(CryptoContext);
  setCoinId(coinId);
  return (
    <>
    
    <div className='lg:ml-[1rem] lg:mr-[1rem] mt-[-1rem]'>
      <div className='w-[100%] lg:p-[52px] px-[20px] pt-[10px] bg-white mt-10 rounded-md'>
    {loadingCoin ? <div className='' >

     
    <Header/>

     <div className='text-[1rem] color-[#002358] mt-2'>
      <span className='font-[700] text-[1.2rem] mr-2'>Summary </span> 
      <span>{coinData.description}</span>
     </div>  
     
    <LIneChart/>
      <div className='flex justify-between max-w-[1632px] w-full mt-9 lg:flex-row flex-col '>
      <Supply/>
      <Value/>
      </div>
     
     </div>
     : <div className='w-[100%] h-[10px] items-center'><LinearProgress color="secondary" /> </div>
     
     }
     
      

      </div>

      </div>
      
    
    </>
  )
}
