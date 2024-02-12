import React, { useContext } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Card } from '@mui/material';
import { CryptoContext } from '../../context/CryptoContext';

import { RemoveFromQueue } from '@mui/icons-material';
import ControlBar from './ControlBar';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { ScreenSizeContext } from '../../context/ScreenSize';




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

const cellValue = {
  fontSize: "0.9rem",
  fontWeight : 700,
  color: " #002358"
}

const Item = ({value}) => {
  return (
    <>
    <TableCell align="center"  sx={cellValue}>
      
      <span className='border-solid border-[1px]  rounded-[3px] p-1' style={ Number(value) >= 0 ? (Number(value)!== 0 ? positive: zero) : negative}>{value ? Number(value).toFixed(2) : 0}%</span>
   
      </TableCell>
    </>
  )
}


export default function InfoTable() {
  const {cryptoData,searched,requestSearch,setSearchVal,searchVal,getCryptoHistory,loading} = useContext(CryptoContext);

  const {activeMenu,size400} = useContext(ScreenSizeContext);
  

  const tableheads = ["Order","Asset","Name","Price","Market Cap Change (24h)","3H","7D","30D"];

  
  return (
    <>
    
   
     <div >
    <TableContainer component={Card}>
      <Table >
        <TableHead>
          <TableRow >
         
          {tableheads.map((data) => (
            !activeMenu && data === "Order" || !size400  && data === "Name"? <></> : (!activeMenu && data === "Market Cap Change (24h)" ? <TableCell align="center" sx={{fontWeight:900,fontSize:"1.1rem",color: "black"}}>24H </TableCell> : <TableCell align="center" sx={{fontWeight:900,fontSize:"1.1rem",color: "black"}}>{data}</TableCell>)
              

              
          ))}

            
           
           
          </TableRow>
        </TableHead>
        {loading ? 
        <TableBody >
          {searched.map((row,index) => (
            <>
            
            <TableRow
              key={row.uuid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 ,} } }
              
            > 
            {activeMenu && <TableCell align="center">{index+1}</TableCell>}
            <Link to={`/tracker/${row.uuid}`}>
              <TableCell align="center" sx={{display:"flex" ,gap:1, alignItems:"center" , justifyContent:"center",Width:"100px,",paddingLeft:"30px"}}>
              <img src = {row.iconUrl} className='h-[1.6rem] w-[1.6rem]' />
              {row.symbol}
              </TableCell>
              </Link>
              { size400 && <TableCell align="center" sx={cellValue} className='min-w-[200px]'>{row.name}</TableCell> }
              
              <TableCell align="center" sx={cellValue}>${row.price ? Number(row.price).toFixed(2) : 0}</TableCell>
              
              <Item value = {row.change} />
              <Item value={row.change3h}/>
              <Item value = {row.change7d}/>

              <Item value = {row.change30d}/>
              
            </TableRow>
            </>))
          }
        </TableBody>
        : <TableCell colSpan={7}>
        <LinearProgress sx={{width:"100%"}}/>
        </TableCell>
      }

      </Table>
    </TableContainer>

   

    </div> 
    </>
  );
}