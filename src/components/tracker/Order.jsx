import React from 'react'
import { useContext } from 'react';
import { CryptoContext } from '../../context/CryptoContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Order = () => {
  const OrderByObject = [
    {value : 'desc' , Label : "Descending"}, 
    {value : 'asc', Label : "Ascending"},
  ];

  const {order,setOrder} = useContext(CryptoContext);

  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  return (
    <>
    <FormControl >
  <InputLabel id="lable-select">Order</InputLabel>
  <Select
    labelId="lable-select"
    id="Order-Label"
    value={order}
    label="Order"
    onChange={handleChange}
  >

    {OrderByObject.map((item) => (
      <MenuItem value={item.value}>{item.Label}</MenuItem>
    ))}
    
  </Select>
</FormControl>
    </>
  )
}
