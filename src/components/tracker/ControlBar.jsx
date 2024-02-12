import React from 'react'
import { useContext,useRef } from 'react';
import { CryptoContext} from '../../context/CryptoContext';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from './Search';
import { SortOrder } from './SortOrder';
import { Order } from './Order';


const ControlBar = () => {
  const{limit,setLimit} = useContext(CryptoContext);

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;

    if (Number(val) !== 0) {
      setLimit(val);
      inputRef.current.value = val;
    }
    else setLimit(10);;
  };


  const PerPage = () => {
    return (
      <>
      <form onSubmit={handleSubmit}>
        <input
        ref={inputRef}
        type='number'
        max = "150"
        min = "1"
        placeholder='10'
        
        sx={{backgroundColor:"black",color:"white"}}
        ></input>
        <button type='submit'>Submit</button>
        </form>

        
      </>
    )
  }



  
  return (

    <>
    <div className='bg-white mb-4 rounded-lg flex p-3 justify-between md:gap-7 gap-3 md:flex-row flex-col items-center' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
        <Search/>
        {/* <PerPage/> */}
        <div className='md:w-[60%] w-full flex gap-3'>
        <SortOrder/>
        <Order/>
        </div>
      </div>
    </>

    
  )
}

export default ControlBar