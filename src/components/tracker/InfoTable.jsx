import React, { useContext } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';
import { CryptoContext } from '../../context/CryptoContext';



export default function InfoTable() {
  const {cryptoData} = useContext(CryptoContext);

  const tableheads = ["Name","Price","Market Cap Change","1H","24H","7D"];
  return (
    <>
     {cryptoData ? <div className='mt-10 ml-[2rem] mr-[2rem]'>
    <TableContainer component={Card}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
          <TableCell>Asset</TableCell>
          {tableheads.map((data) => (
              <TableCell align="right">{data}</TableCell>
            ))}
           
           
          </TableRow>
        </TableHead>
        <TableBody >
          {cryptoData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 ,justifyContent:"center"} }}
            >
              <TableCell component="th" scope="row">
              <img src = {row.image} className='h-[1.6rem] w-[1.6rem]'/>
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.current_price}</TableCell>
              <TableCell align="right">{(row.market_cap_change_percentage_24h).toFixed(2)}</TableCell>
              <TableCell align="right">{(row.price_change_percentage_1h_in_currency).toFixed(2)
}</TableCell>
<TableCell>{(row.price_change_percentage_24h_in_currency
).toFixed(2)}</TableCell>
              <TableCell>{(row.price_change_percentage_7d_in_currency
).toFixed(2)}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   

    </div>  : null}
    </>
  );
}