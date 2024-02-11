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



export default function InfoTable() {
  const {cryptoData,searched,requestSearch,setSearchVal,searchVal,getCryptoHistory,loading} = useContext(CryptoContext);
  

  const tableheads = ["Name","Price","Market Cap Change (24h)","3H","7D","30D"];
  return (
    <>
   
     <div >
    <TableContainer component={Card}>
      <Table sx={{ minWidth: 650 ,backgroundColor:"white",}}>
        <TableHead>
          <TableRow >
          <TableCell align="center" sx={{fontWeight:1000}}>Asset</TableCell>
          {tableheads.map((data) => (
              <TableCell align="center" sx={{fontWeight:1000}}>{data}</TableCell>
            ))}
           
           
          </TableRow>
        </TableHead>
        {loading ? 
        <TableBody >
          {searched.map((row) => (
            <>
            {/* {getCryptoHistory(row.uuid)} */}
            <TableRow
              key={row.uuid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 ,} } }
            >
              <TableCell component="th" align="center">
              <img src = {row.iconUrl} className='h-[1.6rem] w-[1.6rem]'/>
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">${row.price ? Number(row.price).toFixed(2) : 0}</TableCell>
              <TableCell align="center">{row.change ? Number(row.change).toFixed(2) : 0}%</TableCell>
              <TableCell align="center">{row.change3h ? Number(row.change3h).toFixed(2) : 0
}%</TableCell>
<TableCell align="center">{row.change7d ? Number(row.change7d
).toFixed(2) : 0}%</TableCell>
              <TableCell align="center">{row.change30d ? Number(row.change30d
).toFixed(2) : 0}%</TableCell>
              
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