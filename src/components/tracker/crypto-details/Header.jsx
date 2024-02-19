import React, {useContext} from 'react'
import { CryptoContext } from '../../../context/CryptoContext';
import LinearProgress from '@mui/material/LinearProgress';
import { SaveBtn } from '../../home/SaveBtn';

export const Header = () => {

  const {setCoinId,coinData,loadingCoin} = useContext(CryptoContext);
  return (
    <>
  
    <div className=''>
      <div className='flex lg:max-w-[35%] w-full justify-between py-[13px]  px-[20px] rounded-[1.5rem] bg-[#EFF2F7]'  >
        <div className='flex items-center' >
        <div className='w-[40px] h-[40px] mr-[9px] ml-[-3px] lg:mb-0 mb-[-4px] '><img src= {coinData.iconUrl}/></div>
        <div className='flex lg:items-center flex-col lg:flex-row items-start'>
        <div className='lg:text-[1.9rem]  text-[1.6rem] font-[700] color-[#002358] mr-[8px] max-w-[340px] tracking-[-0.028em]'>
        <h1 >{coinData.name}</h1>
        </div>
        <div className='flex items-center color-[#264d89] lg:mb-[-7px]'>
        <div >{coinData.symbol}</div>
        <span className='inline-block color-[#3363aa] border-solid border-[1px] border-[#173e7b] rounded-[3px] py-[1px] px-[5px]  font-[700]  mt-[-4px] ml-[6px]'>#{coinData.rank}</span>
        </div>
        </div>
        <div className='ml-4'>
        <SaveBtn id={coinData.uuid}/>
        </div>
        </div>
        

        <div className='flex items-center lg:ml-[40px] ml-[10px]'>
          <div className='color-[#002358] lg:text-[1.9rem] text-[1.5rem] font-[700] tracking-[-0.028em] flex gap-1'><span>$</span> {coinData.price ? Number(coinData.price).toFixed(2) : 0}</div>
        </div>

        
      
      </div>
      </div>

</>
  )
}
