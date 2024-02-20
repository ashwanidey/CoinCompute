import React, { useContext } from 'react'
import { CryptoNewsContext } from '../../context/CryptoNewsContext'
import Slider from 'react-slick';
import { NewsCard } from './NewsCard';
import { ScreenSizeContext } from '../../context/ScreenSize';

export const NewsSlider = () => {

  const {news} = useContext(CryptoNewsContext)
  const {size400} = useContext(ScreenSizeContext)
  // console.log(news);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: !size400 ? 2 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows : false,
    draggable : true
  };
  return (
    
    
    <div  className=' my-5 md:w-[49%] h-full md:p-3 rounded-lg' style={{
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        {/* <div className='flex justify-center'>
        {size400 &&<span className='font-[900] uppercase text-[1.4rem]'>News</span>}
        </div> */}
        
    <Slider {...settings}>
      {news.map((data) => (
        <div className='p-3 h-full'>
          <a href={data.url}>
        <NewsCard data = {data}/>
        </a>
        </div>
        
      ))}
      
      </Slider>
      </div>
     
  )
}
