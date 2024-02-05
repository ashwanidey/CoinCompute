import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2';


export default function InputDiv({inputKey,openCount,inputEP,inputQuantity,handleInputEP,handleInputQuantity,handleDeleteEntry,activeMenu}){
  return (
    <>
    <div className="input-op">
          {activeMenu && <div className="label-output w-[5rem] pb-6"> {openCount}</div>}
          
      <div className="wrap-input-openPrice ">
        
        <input type="text" className="input"
        placeholder="Enter Entry Price" value = {inputEP} onChange = {handleInputEP} autoComplete="off"/>
        
      </div>
      <div className="wrap-input-openPrice">
          
          <input type="text" className="input"
          placeholder="Enter Quantity" value = {inputQuantity} onChange = {handleInputQuantity} autoComplete="off"/>
          
      </div>
      
      <div className='pb-3'>
          <IconButton aria-label="delete"  color="success">
    <DeleteIcon onClick = {() => handleDeleteEntry(inputKey)} sx={{ fontSize: activeMenu ? 30: 25 , color: red[500] }} />
  </IconButton>

</div>
          
    </div>
    </>
  )
}