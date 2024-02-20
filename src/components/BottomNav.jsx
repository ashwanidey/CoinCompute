import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import CalculateIcon from '@mui/icons-material/Calculate';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { NavLink, useNavigate } from 'react-router-dom';

export const BottomNav = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    
    navigate(`${path}`);
  }



  
 
  return (
    

<div class="fixed bottom-0 left-0 z-50 w-full h-15 bg-white   dark:bg-[#EFF2F7] ">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 group rounded-xl p-1 m-1 hover:bg-[#021E9A] " onClick={() => handleClick("/home")}>
            <HomeIcon  sx={{color:'#021E9A',fontSize:'25px'}}
            className='group-hover:text-white '/>
            <span class="text-sm text-[#021E9A] group-hover:text-white ">Home</span>
        </button>
        
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 group rounded-xl p-1 m-1 hover:bg-[#021E9A]" onClick={() => handleClick("/tracker")}>
           <CandlestickChartIcon  sx={{color:'#021E9A',fontSize:'25px'}}
            className='group-hover:text-white '/>
            <span class="text-sm text-[#021E9A] group-hover:text-white ">Tracker</span>
        </button>

        
        <button type="button" class="inline-flex flex-col items-center justify-center px-5  group rounded-xl p-1 m-1 hover:bg-[#021E9A]" onClick={() => handleClick("/calculator")}>
            <CalculateIcon sx={{color:'#021E9A',fontSize:'25px'}}
            className='group-hover:text-white '/>
            <span class="text-sm text-[#021E9A] group-hover:text-white ">Calculator</span>
        </button>


        <button type="button" class="inline-flex flex-col items-center justify-center px-5  group rounded-xl p-1 m-1 hover:bg-[#021E9A]" onClick={() => handleClick("/news")}>
            <NewspaperIcon sx={{color:'#021E9A',fontSize:'25px'}}
            className='group-hover:text-white '/>
            <span class="text-sm text-[#021E9A] group-hover:text-white ">News</span>
        </button>
    </div>
</div>

  )
}
