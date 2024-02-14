import React ,{useContext, useRef}from 'react'
import { CryptoContext } from '../../../context/CryptoContext';
import LoginIcon from '@mui/icons-material/Login';

export const PerPage = () => {

  const {setLimit} = useContext(CryptoContext);
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
  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center'>
      <label className='mr-3 font-[600]'>Per Page:</label>
        <input
        ref={inputRef}
        type='number'
        max = "150"
        min = "1"
        placeholder='10'
        
        className='flex items-center bg-[#f1f6ff] rounded-[10px] pl-5 w-[4rem] h-[40px] justify-center mr-2'
        ></input>
        <button type='submit'><LoginIcon/></button>
        </form>
  )
}
