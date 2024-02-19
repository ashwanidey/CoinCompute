import TableCell from '@mui/material/TableCell';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Item = ({value}) => {

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

  return (
    <>
    <TableCell align="center"  >
      <div className='flex justify-center'>
      <span  className='rounded-[8px] py-[9px] pr-[6px] h-[40px] font-[500] text-[14px] flex justify-center' style={ Number(value) >= 0 ? (Number(value)!== 0 ? positive: zero) : negative}>
        
        {(Number(value) >= 0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>) }
        
        {value ? Math.abs(Number(value)).toFixed(2) : 0}%
        
        
        </span>
        </div>
       
        
   
      </TableCell>
    </>
  )
}