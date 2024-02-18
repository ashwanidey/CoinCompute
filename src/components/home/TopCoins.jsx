import React, { useContext, useEffect, useState } from 'react'
import { GlobalDataContext } from '../../context/GlobalDataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Card = ({data,index}) => {
  return (
  <div className='flex flex-col p-3 '  >

    <div className='flex gap-3 items-center'>
    <span>{index+1}</span>
      <div ><img src={data.iconUrl} alt="" className='h-[1.4rem]'/></div>
        
        <span className='font-[800] text-[1.1rem] '>{data.symbol}</span>
        <span className='text-[1.1rem] font-[600]'>{data.name}</span>
      
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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    
    <div className='my-4'>
      
    <div className=' md:w-[50%] bg-[#f1f6ff] p-3 rounded-lg'>

       <Slider {...settings}>
        <div>
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
    </div>
    
  )
}
