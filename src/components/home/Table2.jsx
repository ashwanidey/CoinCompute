import React, { useContext } from 'react'
import './table2.css'
import { StorageContext } from '../../context/StorageContext';
import { ScreenSizeContext } from '../../context/ScreenSize';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chartify } from '../Chartify';
import { useNavigate } from 'react-router-dom';

export const Table2 = () => {
  const tableheads = ["Asset","Price","Market Cap Change (24h)","Chart","3H","7D","30D"];

  const {savedCoins} = useContext(StorageContext);
  const {size400} = useContext(ScreenSizeContext);

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
  
  const navigate = useNavigate();
  const handleRowClick = (id,event) => {
    // console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() === 'svg' || event.target.tagName.toLowerCase() === 'path') {
      // If clicked on the button, don't navigate
      return;
    }
    navigate(`/tracker/${id}`);
  }

  return (
    <div class="table-widget lg:w-[60%] w-[95%]">
			<span class="caption-container">
				<span class="table-title">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6775 1.3486C10.9695 2.1636 10.6875 7.2886 11.5105 8.1126C12.3335 8.9346 17.2785 8.5186 18.4665 7.5836C21.3245 5.3326 13.9375 -1.2534 11.6775 1.3486Z" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1372 11.79C17.2212 12.874 14.3472 19.054 8.65122 19.054C4.39722 19.054 0.949219 15.606 0.949219 11.353C0.949219 6.053 6.17822 2.663 7.67722 4.162C8.54022 5.025 7.56822 9.086 9.11622 10.635C10.6642 12.184 15.0532 10.706 16.1372 11.79Z" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					Watchlist
				</span>
				{/* <span class="table-row-count"></span> */}
			</span>
			<div class="table-wrapper">
				<table className='max-h-[1px]'>
          <thead>
            <tr>
              <th className='sticky-ticker ' >Asset</th>
              <th>Price</th>
              <th>Market Cap Change (24h)</th>
              {size400 && <th align= "center">Chart</th> }
              
              <th>MarketCap</th>
              <th>Volume(24H)</th>
            </tr>
          </thead>

          <tbody id='table-rows'>
            
              {savedCoins.map((row) => (
                <tr onClick={(e) => handleRowClick(row.uuid,e)} style={{cursor:"pointer" }}>
                <td align="left" style={{display:"flex" ,gap:6, alignItems:"center",justifyContent:"left",Width:"80px,",paddingLeft:"10px",paddingRight:"40px", minHeight: size400 ? "" : "80px",position:"sticky",left:"0",zIndex : "1",backgroundColor:"#FCFCFD",}} 
              // style={{content: "::before", position: "absolute",boxShadow: "inset 10px 0 8px -8px #00000026"}}
              // style={tablecellshadowright} 
              >
                <SaveBtn ID = {row.uuid}/>
              {/* <div className='font-[700] mr-1'>{serialNo++}</div> */}
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
              ))}
              
            
          </tbody>
        </table>
			</div>
		</div>
  )
}
