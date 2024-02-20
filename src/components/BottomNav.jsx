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
    

<div class="fixed bottom-0 left-0 z-50 w-full h-14 bg-white   dark:bg-[#021E9A] ">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 group" onClick={() => handleClick("/home")}>
            <HomeIcon  sx={{color:'white',fontSize:'25px'}}/>
            <span class="text-sm text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
        </button>
        
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 group" onClick={() => handleClick("/tracker")}>
           <CandlestickChartIcon  sx={{color:'white',fontSize:'25px'}}/>
            <span class="text-sm text-white  group-hover:text-blue-600 dark:group-hover:text-blue-500">Tracker</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5  group" onClick={() => handleClick("/calculator")}>
            <CalculateIcon sx={{color:'white',fontSize:'25px'}}/>
            <span class="text-sm text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">Calculator</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5  group" onClick={() => handleClick("/news")}>
            <NewspaperIcon sx={{color:'white',fontSize:'25px'}}/>
            <span class="text-sm text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">News</span>
        </button>
    </div>
</div>

  )
}
