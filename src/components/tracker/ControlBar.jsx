import React from 'react'
import { useContext,useRef } from 'react';
import { CryptoContext} from '../../context/CryptoContext';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const ControlBar = () => {
  const {searchVal,setSearchVal,limit,setLimit} = useContext(CryptoContext);

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setLimit(val);
      inputRef.current.value = val;
    }
  };
  return (

    <>
    <Paper sx = {{marginBottom:2,padding:2,display:"flex"}}>
      
        <InputBase
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          // onCancelSearch={() => cancelSearch()}
          style={{backgroundColor:"black",color:"white"}}
        /> <SearchIcon />


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
      </Paper>
    </>

    
  )
}

export default ControlBar