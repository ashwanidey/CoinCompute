import React from 'react'
import { useContext } from 'react'
import { CryptoContext } from '../../context/CryptoContext'

import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {

 const {searchVal,setSearchVal} = useContext(CryptoContext);
 const handleChange = ({ target }) => {
  // Remove non-alphabetic characters using a regular expression
  const newValue = target.value.replace(/[^a-zA-Z]/g, '');

  setSearchVal(newValue);
};
  return (
    <>
    <input
          value={searchVal}
          onChange={(e) => handleChange(e)}
          
          style={{backgroundColor:"black",color:"white"}}
        /> <SearchIcon />
    </>
  )
}
