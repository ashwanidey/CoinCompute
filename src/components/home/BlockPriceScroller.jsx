import React, { useContext } from 'react'
import { CryptoContext } from '../../context/CryptoContext'
import { NavLink } from 'react-router-dom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const positive = {
  color : "white",
  backgroundColor : "#16c784"
}
const negative = {
  color : 'white',
  backgroundColor : "#ea3943"
}

const Card =  ({data}) => {
  return (
    <>
    <div className='min-w-[141px] h-[160px] p-[16px]  pl-[23px]  rounded-[16px] flex flex-col justify-between mr-[25px] mb-5 ' style={{boxShadow : "8px 8px 16px #b3b3b3,-8px -8px 16px #ffffff",background: "linear-gradient(145deg, #ffffff, #e6e6e6)"}}>

      <div className='h-[20px] mb-3'>
        <img src={data.iconUrl} alt="" width="36px" height="26px"/> 
        </div>

      <div className=''>
      <span className='font-[600] line-clamp-2'>{data.name}</span>
      <span className='text-[#58667e] font-[500]'>${Number(Number(data.price).toFixed(2)).toLocaleString()}</span>
      </div>

      <span className='flex items-center'>
      
      <span className=' font-[600] pr-[6px] rounded-[8px] ' style={Number(data.change) > 0 ? positive : negative}>
      { Number(data.change) > 0 ? <ArrowDropUpIcon />: <ArrowDropDownIcon />}
        {Math.abs(Number(data.change))} %</span>
      </span>
    </div>
    </>
  )
}

export const BlockPriceScroller = () => {

  const {scrollerData} = useContext(CryptoContext);
  return (
    <div className='overflow-x-auto flex overflow-y-hidden h-[190px]items-center p-4'>
      {
        scrollerData.map((data) => (
          <NavLink to={`/tracker/${data.uuid}`} >
          <Card data = {data}/>
          </NavLink>
        ))
      }
      
    </div>
  )
}
