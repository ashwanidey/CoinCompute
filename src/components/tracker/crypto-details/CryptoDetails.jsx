import React, { useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from '../../../context/CryptoContext';


import { Header } from './Header';

export const CryptoDetails = () => {
  let {coinId} = useParams();
  const {setCoinId,coinData,loadingCoin} = useContext(CryptoContext);
  setCoinId(coinId);
  return (
    <>
    <div className='ml-[1rem] mr-[1rem]'>
      <div className='flex w-[100%] :p-[52px] p-[10px] bg-white mt-10'>

     <Header/>
      

      </div>

      </div>
      
    
    </>
  )
}
