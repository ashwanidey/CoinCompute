import React, { useContext, useState } from 'react'
import { CryptoContext } from '../../../context/CryptoContext'
import Chart from "react-apexcharts";
import millify from 'millify';
import { ScreenSizeContext } from '../../../context/ScreenSize';

export const LIneChart = () => {

  const {coinHistory,timePeriod,coinData,setTimePeriod} = useContext(CryptoContext);

  const {size400} = useContext(ScreenSizeContext);

  const coinPrice = [];
  const coinTimestamp = [];

  const chartOptions = {
    options: {
      chart: {
        
        type:'area',
        // stacked: false,
        
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        colors :["#021E9A"],
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          
          opacityFrom: 0.8,
          opacityTo: 0.2,
          // stops: [0, 90, 100]
          
        },
      },
      stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: ["#02146A"],
         width: size400 ? 2 : 1,
        dashArray: 0, 
    },
      
      xaxis: {
        type : 'datetime',
        categories: coinTimestamp,
        labels : {
          show: true,
          // format: 'dd/MM',
          
          datetimeUTC: true,
          datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'hh:mm TT',
          },
      }
      },
      
    },
    
    series: [
      {
        name: coinData.name,
        data: coinPrice
      }
    ]
  };
  

  for(let i =0;i<coinHistory.length;i++){
    coinPrice.push(Number(coinHistory[i].price).toFixed(2));
    coinTimestamp.push(coinHistory[i].timestamp*1000);
  }
  console.log(coinTimestamp);

  
  const value = ['3h','24h','7d','30d','3m','1y','3y','5y'];

  const handleClick  = (val,index) => {
    setClickedItem(index);
    setTimePeriod(val);
  }
  const [clickedItem,setClickedItem] = useState(value.indexOf(timePeriod));

  const clicked = {
    color: "#fff",
    backgroundColor: "#3363aa",
  }
  
  return (
    <>
    <h1 class="text-[2.4rem] font-[700] mt-9">Price Chart</h1>
    <div className='ml-[-1rem]'>
    <Chart  options={chartOptions.options}
              series={chartOptions.series}
              type='area'
              
              height={300}/>

</div>

    <div className='py-[21px] flex justify-center'>
      <div className='border-solid border-[1px] border-[#173e7b] inline-flex max-w-full rounded-[3px] items-center'>

        {size400 && <div className='color-[#3363aa] lg:text-[1rem] text-[0.8rem] font-[700] lg:px-[7px] px-[3px] pl-[3px] '>Time Period</div>}
        <div>
          <ul className='inline-flex px-[5px] lg:py-[17px] md:py-[11px]  py-[8px] items-center'>
            {value.map((data,index) => (
              <li><div className='color-[#002358] lg:text-[1rem] text-[0.8rem] font-[700] px-[7px] rounded-[3px] cursor-pointer uppercase ' onClick={() => handleClick(data,index)} 
              style={
                clickedItem === index ? clicked : {}}
              >{data}</div></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
    
  )
}
