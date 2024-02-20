import React, { useContext, useEffect, useState } from 'react'
import { GlobalDataContext } from '../../context/GlobalDataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import millify from 'millify';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Card = ({data,index}) => {
  return (
  <div className='flex flex-col p-3 '  >

    <div className='flex gap-3 items-center justify-between'>
    <div className='flex gap-2'>
    <span>{index+1}</span>
      <div ><img src={data.iconUrl} alt="" className='h-[1.4rem]'/></div>
        
        <span className='font-[800] text-[1.1rem] '>{data.symbol}</span>
        <span className='text-[1.1rem] font-[600]'>{data.name}</span>
        </div>
        <div className='flex gap-2'>
        <span className='text-[1.1rem] font-[600]'>${(Number(data.price)).toFixed(2)}</span>
        <span className='rounded-[8px] py-[9px] pr-[6px] h-[30px] font-[500] text-[14px] flex justify-center items-center'
        style={Number(data.change) > 0 ? {backgroundColor : "rgba(52, 179, 73, 0.1)",
        color : "green",} : { backgroundColor : "rgba(240, 41, 52, 0.1)",
        color:"red",}}>
          {Number(data.change) > 0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
        {(Number(data.change)).toFixed(2)}</span>
        </div>
      
      </div>
      
   
    </div>
  )
}



export const TopCoins = () => {

  const {globalData} = useContext(GlobalDataContext);
  const bestCoins = globalData.bestCoins ? globalData.bestCoins : [];
  const newCoins = globalData.newestCoins ? globalData.newestCoins : [];
  
  // const [currentIndex,setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === bestCoins.length-1;
  //   const newIndex = isLastSlide ? 0 : currentIndex+1;
  //   setCurrentIndex(newIndex);
  // }
  // useEffect(() => {
  //   const intervalId = setInterval(nextSlide, 2000);
  //   return () => clearInterval(intervalId);
  // }, [currentIndex]); 

  
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows : false,
    draggable : true
  };

  return (
    
    
      
    <div className=' my-5 md:w-full  bg-[#f1f6ff] p-3 rounded-lg' style={{
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }}>

       <Slider {...settings}>
        <div >
        <span className='font-[900] uppercase text-[1.1rem]'>Top Coins</span>
    {bestCoins.map((data,index) => (
      < Card data = {data} index= {index}/>
      
    ))
    }
    </div>
    <div>
    <span className='font-[900] uppercase text-[1.1rem]'>New Coins</span>
    {newCoins.map((data,index) => (
      < Card data = {data} index = {index}/>
      
    ))
    }
    </div>
    
    </Slider>
    </div>
  
    
  )
}
