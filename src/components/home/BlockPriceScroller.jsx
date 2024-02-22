import React, { useContext } from 'react'
import { CryptoContext } from '../../context/CryptoContext'
import { NavLink } from 'react-router-dom'

const positive = {
  color : "green"
}
const negative = {
  color : 'red',
}

const Card =  ({data}) => {
  return (
    <>
    <div className='min-w-[141px] h-[160px] p-[16px] rounded-[16px] flex flex-col justify-between mr-[16px] ' style={{boxShadow : "#e1e5ea 0px 1px 6px 0px"}}>
      <div>
        <img src={data.iconUrl} alt="" width="36px" /> 
      </div>
      <span className='font-[600] line-clamp-2'>{data.name}</span>
      <span>${Number(Number(data.price).toFixed(2)).toLocaleString()}</span>
      <span className='pr-[8px]' style={Number(data.change) > 0 ? positive : negative}>{Math.abs(Number(data.change))}</span>
    </div>
    </>
  )
}

export const BlockPriceScroller = () => {

  const {scrollerData} = useContext(CryptoContext);
  return (
    <div className='overflow-x-auto flex overflow-y-hidden h-[170px] items-center p-4'>
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
