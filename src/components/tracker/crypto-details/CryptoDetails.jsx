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
    <div className='ml-[2rem] mr-[2rem]'>
      <div className='inline-flex w-[100%] p-[52px] bg-white mt-10 '>

     <Header/>
      

      </div>

      </div>
      
    
    </>
  )
}
