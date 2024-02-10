import React, { useContext } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CryptoContext } from '../../context/CryptoContext';

export const SortOrder = () => {
  const OrderByObject = [
    {value : 'marketCap' , Label : "Market"}, 
    {value : 'price', Label : "Price"},
    {value : '24hVolume',Label : "Volume"}, 
    {value : 'change',Label : "Price Change"}, 
    {value : 'listedAt',Label : "Listed At"}
  ];


  const {orderBy,setOrderBy} = useContext(CryptoContext);
  const handleChange = (event) => {
    setOrderBy(event.target.value);
  };
  return (
    <>
    <FormControl >
  <InputLabel id="demo-simple-select-label">Order By</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={orderBy}
    label="Order By"
    onChange={handleChange}
  >

    {OrderByObject.map((order) => (
      <MenuItem value={order.value}>{order.Label}</MenuItem>
    ))}
    
  </Select>
</FormControl>
    </>
  )
}
