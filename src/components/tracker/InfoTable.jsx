import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Card} from '@mui/material';
import { CryptoContext } from '../../context/CryptoContext';
import LinearProgress from '@mui/material/LinearProgress';
import {useNavigate } from 'react-router-dom';
import { ScreenSizeContext } from '../../context/ScreenSize';
import TablePagination from './TablePagination';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StorageContext } from '../../context/StorageContext';
import { Chartify } from '../Chartify';
import { Item } from './crypto-details/Item';
import millify from 'millify';



const positive = {
  
  backgroundColor : "rgba(52, 179, 73, 0.1)",
  color : "green",
  

}

const negative = {
  
  backgroundColor : "rgba(240, 41, 52, 0.1)",
  color:"red",
 
}

const zero = {
  backgroundColor : "#f1f6ff",
  color:"gray",
}

const cellValue = {
  fontSize: "0.9rem",
  fontWeight : 600,
  color: " #242424"
}






export default function InfoTable() {
  const {cryptoData,searched,requestSearch,setSearchVal,searchVal,getCryptoHistory,loading,offset} = useContext(CryptoContext);

  const {activeMenu,size400} = useContext(ScreenSizeContext);
  

  const tableheads = ["Price","Market Cap Change (24h)","Chart","3H","7D","30D","MarketCap","Volume(24H)"];

  const [clickedDiv,setClickedDiv] = useState(0);
  
 
  const navigate = useNavigate();
  
  const handleRowClick = (id,event) => {
    // console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
      // If clicked on the button, don't navigate
      return;
    }
    navigate(`/tracker/${id}`);
    
    
    
  }
  let serialNo = offset+1;


  const tablecellshadowright =  {
    boxShadow: "inset 10px 0 8px -8px #00000026",
    position: "absolute",
    // top: "0",
    right: "0",
    bottom: "-1px",
    width: "30px",
    transform: "translate(100%)",
    transition: "box-shadow .3s",
    content: "::before",
  
}


const SaveBtn = ({ID}) => {
  const {saveCoin,allCoins,removeCoin} = useContext(StorageContext);
  

  const handleClick = () => {
    saveCoin(ID);

    


    if(allCoins.includes(ID)){
      removeCoin(ID);
    }else{
      saveCoin(ID);
    }
  }

  return (
  <button className='w-[20px]' onClick= {() => handleClick()}>
     {
      !allCoins.includes(ID) ?  <FavoriteBorderOutlinedIcon sx={{fontSize : "large"}}/> : 
      <FavoriteIcon sx={{fontSize : "large"}}/>
     }             
  
  </button>
  )
}
  
  
  return (
    <>
    
   
     <div > 
    <TableContainer component={Card} style = {{borderRadius : "16px",backgroundColor:"#FCFCFD",boxShadow : "0px 4px 16px 0px rgba(148, 156, 169, 0.15)",border: "2px solid #EDEEF1"}}>
      <Table style ={{ fontFamily: "sans-serif"}}>
        <TableHead>
          <TableRow >
            <div className = "pl-9" style = {{borderBottom: "1px solid rgba(224, 224, 224, 1)",position:"sticky",left:"0",zIndex : "1",backgroundColor:"#FCFCFD",}}>
          <TableCell align="left" sx={{fontWeight:800,fontSize:"1.1rem",color: "#272727",borderBottom: "0"}}
          >Asset</TableCell>
          </div>
          {tableheads.map((data) => (
            
            (!size400 && data === "Chart" ? "" :
            (!activeMenu && data === "Market Cap Change (24h)" ? 
            <TableCell align="center" sx={{fontWeight:800,fontSize:"1.1rem",color: "#272727"}}>24H </TableCell> :
            data === "Price" || data === "Asset" ? <TableCell align="left" sx={{fontWeight:800,fontSize:"1.1rem",color: "#272727"}}>{data}</TableCell> : <TableCell align="center" sx={{fontWeight:800,fontSize:"1.1rem",color: "#272727"}}>{data}</TableCell>)
            )
              

              
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
              onClick={(e)=> handleRowClick(row.uuid,e)}
              
            > 
            
            
            {/* <Link to={`/tracker/${row.uuid}`}> */}
              <TableCell align="left" sx={{display:"flex" ,gap:1, alignItems:"center",justifyContent:"left",Width:"80px,",paddingLeft:"10px",paddingRight:size400 ? "40px": "20px", minHeight: size400 ? "" : "20px",position:"sticky",left:"0",zIndex : "1",backgroundColor:"#FCFCFD", maxWidth:"auto",minWidth:"auto"}} 
              // style={{content: "::before", position: "absolute",boxShadow: "inset 10px 0 8px -8px #00000026"}}
              // style={tablecellshadowright} 
              >
                <SaveBtn ID = {row.uuid}/>
              {size400 && <div className='font-[700] md:mr-1'>{serialNo++}</div>}
              <img src = {row.iconUrl} className='h-[1.6rem] w-[1.6rem]' />
              <div className='flex flex-col'>
              <span style={cellValue} className='line-clamp-2'>{row.name}</span>
              <span>{row.symbol}</span>
              </div>
              </TableCell>
              {/* </Link> */}
              
              {/* { size400 && <TableCell align="left" sx={cellValue} className='min-w-[150px] '></TableCell> } */}
            
              <TableCell align="left" sx={cellValue} >${row.price ? Number(row.price).toFixed(2) : 0}</TableCell>
              
             
              {size400 && <Item value = {row.change} />}
              
              <TableCell  className="max-w-[150px] min-w-[150px]" sx={{padding: "0px 10px 0px 10px"}}>
              {!size400 && <div  className='rounded-[8px] w-[75px] py-[1px] pr-[6px] h-[30px] font-[500] text-[14px] flex items-center' style={ Number(row.change) >= 0 ? (Number(row.change)!== 0 ? positive: zero) : negative}>
      
      {(Number(row.change) > 0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>)}
      
      {row.change ? Math.abs(Number(row.change)).toFixed(2) : 0}%
      
      </div>}
              <Chartify sparklineData = {row.sparkline} change={row.change}/></TableCell>
              
              
              <Item value={row.change3h}/>
              <Item value = {row.change7d}/>

              <Item value = {row.change30d}/>
              <TableCell align= "center" sx ={cellValue}>$
              {size400 ? Number(row.marketCap).toLocaleString() : millify(row.marketCap)}  </TableCell>
              <TableCell align= "center" sx ={cellValue}>$
              {size400 ? Number(row["24hVolume"]).toLocaleString() : millify(row["24hVolume"])}</TableCell>

              

              
              
           
              
              
            </TableRow>
            
            </>))
          }
        </TableBody>
        : <TableCell colSpan={9}>
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