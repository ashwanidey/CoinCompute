import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ScreenSizeContext } from '../../context/ScreenSize';

import { Chartify } from '../Chartify';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { SaveBtn } from './SaveBtn';
import { Item } from '../tracker/crypto-details/Item';

export const TableRow = ({row,id}) => {

  const navigate = useNavigate();
  const handleRowClick = (id,event) => {
    // console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path' ||event.target.tagName.toLowerCase() === 'button') {
      // If clicked on the button, don't navigate
      return;
    }
    navigate(`/tracker/${id}`);

  }

  

  const cellValue = {
    fontSize: "0.9rem",
    fontWeight : 600,
    color: " #242424"
  }
  const positive = {
  
    borderColor : "green",
    color : "green",

  } 
  const negative = {
    borderColor : "red",
    color:"red",
   
  }
  const zero = {
    borderColor : "gray",
    color:"gray",
  }

  


  const {size400} = useContext(ScreenSizeContext);

  

  const style = {
    
    cursor:"pointer" ,
  }
  return (
    <>
    <tr onClick={(e) => handleRowClick(row.uuid,e)}  key = {row.uuid} className='cursor-pointer'
                >
                <td align="left" style={{display:"flex" ,gap:6, alignItems:"center",justifyContent:"left",Width:"80px,",paddingLeft:"10px",paddingRight:"40px", minHeight: size400 ? "" : "80px",position:"sticky",left:"0",zIndex : "1",backgroundColor:"#FCFCFD",}} 

            
            
              >
                <SaveBtn ID = {row.uuid}/>
 
              <img src = {row.iconUrl} className='h-[1.6rem] w-[1.6rem]' />
              <div className='flex flex-col m'>
              <span className='stock-info__ticker'>{row.symbol}</span>
              <span className='md:text-nowrap text-pretty'>{row.name}</span>
              
              </div>
              </td>


              <td align="left" style={cellValue} >${row.price ? Number(row.price).toFixed(2) : 0}</td>
              {size400 && <Item value = {row.change} />}

              <td  className="max-w-[150px] min-w-[150px]">
              {!size400 && <div  className='rounded-[8px] w-[75px] py-[1px] pr-[6px] h-[30px] font-[500] text-[14px] flex items-center' style={ Number(row.change) >= 0 ? (Number(row.change)!== 0 ? positive: zero) : negative}>
      
      {(Number(row.change) > 0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>)}
      
      {row.change ? Math.abs(Number(row.change)).toFixed(2) : 0}%
      
      </div>}
              <Chartify sparklineData = {row.sparkline} change={row.change}/></td>

              {/* <Item value={row.change3h}/>
              <Item value = {row.change7d}/>

              <Item value = {row.change30d}/> */}
              <td  sx ={cellValue}>${Number(row.marketCap).toLocaleString()}</td>
              <td  sx ={cellValue}>${Number(row["24hVolume"]).toLocaleString()}</td>

                </tr>
                </>
  )
}
