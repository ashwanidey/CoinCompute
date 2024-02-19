import React, { useContext } from 'react'
import { CryptoNewsContext } from '../../context/CryptoNewsContext'
import { NewsCard } from './NewsCard';



export const News = () => {

  const {news} = useContext(CryptoNewsContext);
  
  return (
    <>
    
      <div className='flex justify-center'>
    <div className='font-[900] text-[2rem] uppercase '>Crypto News</div>
    </div>
    <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 md:gap-8 gap-3 md:m-6 m-[1.1rem]'>
      
      {news.map((data,index) => (
        
        <a href={data.url}>
        <NewsCard data = {data}/>
        </a>
        
      ))}
      
    </div>
    
    </>
  )
}
