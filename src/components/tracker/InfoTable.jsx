import React, { useContext } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Card} from '@mui/material';
import { CryptoContext } from '../../context/CryptoContext';

import { RemoveFromQueue } from '@mui/icons-material';
import ControlBar from './ControlBar';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { ScreenSizeContext } from '../../context/ScreenSize';
import TablePagination from './TablePagination';

import Chart from "react-apexcharts";
import { green, red } from '@mui/material/colors';




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
  fontWeight : 600,
  color: " #242424"
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
  const {cryptoData,searched,requestSearch,setSearchVal,searchVal,getCryptoHistory,loading,offset} = useContext(CryptoContext);

  const {activeMenu,size400} = useContext(ScreenSizeContext);
  

  const tableheads = ["Asset","Price","Market Cap Change (24h)","3H","7D","30D","Chart"];
 
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/tracker/${id}`);
  }
  let serialNo = offset+1;
  const Chartify = ({sparklineData,change}) => {
    let arr = [];
    for(let i =0;i<sparklineData.length;i++){
      arr.push(Number(sparklineData[i]).toFixed(8));
    }
    const chartOptions = {
      series: [{
        data: arr
      }],
      options: {
        chart: {
          
          
          sparkline: {
            enabled: true
          }
        },
        fill: {
          opacity: 1,
          colors: Number(change) > 0 ? green[800] : red[800],
        },
        stroke: {
          show: true,
          // curve: 'straight',
          
          colors: Number(change) > 0 ? ["#0A5C15"]: ["#911710"],
           width: 2,
           
      },
        tooltip: {
          enabled:false,
          fixed: {
            enabled: false,
            
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      },
    }
  
    return (
      <>
      <div className='w-full'>
      <Chart options={chartOptions.options}
                series={chartOptions.series}
                type={"area"}
                
                height={35}/>
                 </div>
      </>
     
    )
  }

  
  return (
    <>
    
   
     <div > 
    <TableContainer component={Card}>
      <Table >
        <TableHead>
          <TableRow >
         
          {tableheads.map((data) => (
            
            (!activeMenu && data === "Market Cap Change (24h)" ? 
            <TableCell align="center" sx={{fontWeight:900,fontSize:"1.1rem",color: "black"}}>24H </TableCell> :
            data === "Price" || data === "Asset" ? <TableCell align="left" sx={{fontWeight:800,fontSize:"1.1rem",color: "black"}}>{data}</TableCell> : <TableCell align="center" sx={{fontWeight:800,fontSize:"1.1rem",color: "black"}}>{data}</TableCell>)
              

              
          ))}

            
           
           
          </TableRow>
        </TableHead>
        {loading ? 
        <TableBody >
          {searched.map((row,index) => (
            <>
            
            <TableRow
              key={row.uuid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 ,},cursor:"pointer" } }
              onClick={()=> handleRowClick(row.uuid)}
              
            > 
            
            
            {/* <Link to={`/tracker/${row.uuid}`}> */}
              <TableCell align="left" sx={{display:"flex" ,gap:1, alignItems:"center",justifyContent:"left",Width:"100px,",paddingLeft:"20px",paddingRight:"40px"}}>
              <div className='font-[700] mr-2'>{serialNo++}</div>
              <img src = {row.iconUrl} className='h-[1.6rem] w-[1.6rem]' />
              <div className='flex flex-col'>
              <span style={cellValue}>{row.name}</span>
              <span>{row.symbol}</span>
              </div>
              </TableCell>
              {/* </Link> */}
              
              {/* { size400 && <TableCell align="left" sx={cellValue} className='min-w-[150px] '></TableCell> } */}
            
              <TableCell align="left" sx={cellValue} >${row.price ? Number(row.price).toFixed(2) : 0}</TableCell>
              
              <Item value = {row.change} />
              <Item value={row.change3h}/>
              <Item value = {row.change7d}/>

              <Item value = {row.change30d}/>

              

                <TableCell  className="w-[150px]"><Chartify sparklineData = {row.sparkline} change={row.change}/></TableCell>
              
              
           
              
              
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
    <TablePagination/>
    
    </>
  );
}