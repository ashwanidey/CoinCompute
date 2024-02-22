import React, { useContext } from 'react'
import "./priceScroller.css"
import { CryptoContext } from '../context/CryptoContext'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import millify from 'millify';
import { NavLink } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

const positive = {
  color : "green"
}
const negative = {
  color : 'red',
}
const Content = ({data}) => {
  
  return (
    <>
    <li className='flex  justify-between mr-[42px] sm:mb-3'>
      <div className='flex flex-col justify-between gap-1 item-center '>
        <div className='ml-[0.1rem] h-[20px]'><img src={data.iconUrl} alt="" width= "20px" height="20px"/></div>
        <div className='flex w-full justify-center'>
          { Number(data.change) > 0 ? <ArrowDropUpIcon sx={positive}/>: <ArrowDropDownIcon sx={negative}/>}
          </div>
        </div>


      <div className='ml-[11px] h-full pt-[3px] flex justify-between flex-col'>
        <span className='whitespace-nowrap text-left'>{data.name}</span>
        <div className='flex flex-row mt-[5px]'>
          <span className='pr-[8px]' style={Number(data.change) > 0 ? positive : negative}>{Math.abs(Number(data.change))}</span>
          
          <span >${Number(Number(data.price).toFixed(2)).toLocaleString()}</span>
        </div>
      </div>
    </li>
    </>
  )
}

export const PriceScroller = () => {
  const {scrollerData,scrollerLoading} = useContext(CryptoContext);
  return (
    <div className=' sm:min-w-[70vh] max-w-[160vh] w-full overflow-y-hidden pr-2 pl-2 '>
      
      <div className='wrapperPrice'>
        <div className='values '>
          <div className='scroller overflow-x-auto w-full '>
          <ul className='flex transition-all duration-300 ease-in-out p-0 m-0 overflow-y-hidden' >
            {!scrollerLoading ? scrollerData.map((data) => (
              <NavLink to = {`/tracker/${data.uuid}`}>
              <Content data = {data}/>
              </NavLink>
            )) : <LinearProgress color="inherit" className='w-full'/>}
            
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
