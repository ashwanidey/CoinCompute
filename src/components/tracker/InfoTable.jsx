import React, { useContext } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Card } from '@mui/material';
import { CryptoContext } from '../../context/CryptoContext';
import SearchIcon from '@mui/icons-material/Search';



export default function InfoTable() {
  const {cryptoData,searched,requestSearch,setSearchVal,searchVal} = useContext(CryptoContext);

  const tableheads = ["Name","Price","Market Cap Change","1H","24H","7D"];
  return (
    <>
    <Paper sx = {{marginBottom:2,padding:2}}>
        <InputBase
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onCancelSearch={() => cancelSearch()}
          sx={{backgroundColor:"black",color:"white"}}
        /> <SearchIcon /></Paper>
     {cryptoData ? <div >
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
        <TableBody >
          {searched.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 ,} } }
            >
              <TableCell component="th" align="center">
              <img src = {row.image} className='h-[1.6rem] w-[1.6rem]'/>
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">${row.current_price}</TableCell>
              <TableCell align="center">{(row.market_cap_change_percentage_24h).toFixed(2)}%</TableCell>
              <TableCell align="center">{(row.price_change_percentage_1h_in_currency).toFixed(2)
}%</TableCell>
<TableCell align="center">{(row.price_change_percentage_24h_in_currency
).toFixed(2) }%</TableCell>
              <TableCell align="center">{(row.price_change_percentage_7d_in_currency
).toFixed(2)}%</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   

    </div>  : null}
    </>
  );
}