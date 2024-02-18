import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ScreenSizeContext } from '../../context/ScreenSize';
import { StorageContext } from '../../context/StorageContext';
import { Chartify } from '../Chartify';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const TableRow = ({row,id}) => {

  const navigate = useNavigate();
  const handleRowClick = (id,event) => {
    // console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
      // If clicked on the button, don't navigate
      return;
    }
    navigate(`/tracker/${id}`);

  }

  const SaveBtn = ({ID}) => {
    const {saveCoin,allCoins,removeCoin} = useContext(StorageContext);
    
  
    const handleClick = () => {
      saveCoin(ID);

  
      if(allCoins.includes(ID)){
        removeCoin(ID);
      }else{
        saveCoin(ID);
      }
    }
  
    return (
    <button className='w-[20px]' onClick= {() => handleClick()}>
       {
        !allCoins.includes(ID) ?  <FavoriteBorderOutlinedIcon sx={{fontSize : "large"}}/> : 
        <FavoriteIcon sx={{fontSize : "large"}}/>
       }             
    
    </button>
    )
  }

  const cellValue = {
    fontSize: "0.9rem",
    fontWeight : 600,
    color: " #242424"
  }
  const positive = {
  
    borderColor : "green",
    color : "green",

  } 
  const negative = {
    borderColor : "red",
    color:"red",
   
  }
  const zero = {
    borderColor : "gray",
    color:"gray",
  }

  const Item = ({value}) => {
    return (
      <>
      <td align="center"  sx={cellValue} >
        
        <span className='border-solid border-[1px]  rounded-[3px] p-1' style={ Number(value) >= 0 ? (Number(value)!== 0 ? positive: zero) : negative}>{value ? Number(value).toFixed(2) : 0}%</span>
     
        </td>
      </>
    )
  }


  const {size400} = useContext(ScreenSizeContext);

  

  const style = {
    
    cursor:"pointer" ,
  }
  return (
    <>
    <tr onClick={(e) => handleRowClick(row.uuid,e)}  key = {row.uuid}
                >
                <td align="left" style={{display:"flex" ,gap:6, alignItems:"center",justifyContent:"left",Width:"80px,",paddingLeft:"10px",paddingRight:"40px", minHeight: size400 ? "" : "80px",position:"sticky",left:"0",zIndex : "1",backgroundColor:"#FCFCFD",}} 

            
            
              >
                <SaveBtn ID = {row.uuid}/>
 
              <img src = {row.iconUrl} className='h-[1.6rem] w-[1.6rem]' />
              <div className='flex flex-col m'>
              <span className='stock-info__ticker'>{row.symbol}</span>
              <span className='md:text-nowrap text-pretty'>{row.name}</span>
              
              </div>
              </td>


              <td align="left" style={cellValue} >${row.price ? Number(row.price).toFixed(2) : 0}</td>
              {size400 && <Item value = {row.change} />}

              <td  className="max-w-[150px] min-w-[150px]">
              {!size400 && <span style={row.change < 0 ? negative : positive} className='font-[600] '>
                {row.change > 0 ? <span>+</span> : <></>}
                {row.change}</span>}
              <Chartify sparklineData = {row.sparkline} change={row.change}/></td>

              {/* <Item value={row.change3h}/>
              <Item value = {row.change7d}/>

              <Item value = {row.change30d}/> */}
              <td  sx ={cellValue}>${Number(row.marketCap).toLocaleString()}</td>
              <td  sx ={cellValue}>${Number(row["24hVolume"]).toLocaleString()}</td>

                </tr>
                </>
  )
}
