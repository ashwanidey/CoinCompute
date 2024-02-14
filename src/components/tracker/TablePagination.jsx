import React ,{useContext,useState,useEffect}from 'react';
import Pagination from '@mui/material/Pagination';
import { CryptoContext } from '../../context/CryptoContext';
import { PerPage } from './crypto-details/PerPage';


export default function TablePagination() {
  
  const {offset,setOffset,limit,coinData,totalCoin,searchVal} = React.useContext(CryptoContext);
  const [page,setPage] = useState();
 
 

  const handleChange = (event,page) => {
    setPage(page);
    setOffset(limit * (page-1))
  }
 

  
  

  
  return (
    
      <div className='flex justify-center my-[20px] items-center lg:flex-row flex-col gap-3'>
        <PerPage/>
      
    <Pagination count={Math.ceil(totalCoin/limit)} shape="rounded" color='primary' onChange={handleChange} />
  
    </div>
     
      
    
  );
}