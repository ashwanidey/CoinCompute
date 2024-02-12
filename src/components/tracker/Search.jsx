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
    <div className='flex items-center bg-[#f1f6ff] rounded-[30px] pl-5 md:w-[40%] w-full h-[50px]'>
      <SearchIcon />
      <input
            value={searchVal}
            onChange={(e) => handleChange(e)}
            
            className='w-full bg-[#f1f6ff] rounded-[30px] mr-3'
            placeholder='Search Coins'
          />
      </div>
    </>
  )
}
