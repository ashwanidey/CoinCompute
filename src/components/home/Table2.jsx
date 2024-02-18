import React, { useContext } from 'react'
import './table2.css'
import { StorageContext } from '../../context/StorageContext';
import { ScreenSizeContext } from '../../context/ScreenSize';

import { Chartify } from '../Chartify';
import { useNavigate } from 'react-router-dom';

import { TableRow } from './TableRow';

export const Table2 = () => {
  const tableheads = ["Asset","Price","Market Cap Change (24h)","Chart","3H","7D","30D"];

  const {savedCoins} = useContext(StorageContext);
  const {size400} = useContext(ScreenSizeContext);

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/tracker');
  }
  
  

  return (
    <div class="table-widget lg:w-[60%] w-[95%] ">
			<span class="caption-container relative">
				<span class="table-title">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6775 1.3486C10.9695 2.1636 10.6875 7.2886 11.5105 8.1126C12.3335 8.9346 17.2785 8.5186 18.4665 7.5836C21.3245 5.3326 13.9375 -1.2534 11.6775 1.3486Z" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1372 11.79C17.2212 12.874 14.3472 19.054 8.65122 19.054C4.39722 19.054 0.949219 15.606 0.949219 11.353C0.949219 6.053 6.17822 2.663 7.67722 4.162C8.54022 5.025 7.56822 9.086 9.11622 10.635C10.6642 12.184 15.0532 10.706 16.1372 11.79Z" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Watchlist
				</span>
				<span class="table-row-count">[{savedCoins.length}] Coins</span>
       
        <div className=' right-0 bottom-5 absolute cursor-pointer' onClick = {() => handleClick()}>+ Add Coins</div>
        
			</span>
			<div class="table-wrapper">
				<table className='max-h-[1px]'>
          <thead>
            <tr>
              <th className='sticky-ticker' >Asset</th>
              <th>Price</th>
              <th>Market Cap Change (24h)</th>
              {size400 && <th align= "center">Chart</th> }
              
              <th>MarketCap</th>
              <th>Volume(24H)</th>
            </tr>
          </thead>
          
          <tbody id='table-rows'>
         
              {savedCoins.map((row) => (

                <TableRow row = {row} key = {row.uuid} id = {row.uuid}/>
              ))}
          
              
            
          </tbody>
          
        </table>
			</div>
		</div>
  )
}
