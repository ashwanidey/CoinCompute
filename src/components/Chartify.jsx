import Chart from "react-apexcharts";
import { green, red } from '@mui/material/colors';
import { useContext } from "react";
import { ScreenSizeContext } from "../context/ScreenSize";

export const Chartify = ({sparklineData,change}) => {

  const {size400} = useContext(ScreenSizeContext);
    
    const chartOptions = {
      series: [{
        data: sparklineData
      }],
      options: {
        chart: {
          
          
          sparkline: {
            enabled: true
          }
        },
        fill: {
          opacity: 1,
          colors: Number(change) > 0 ? green[800] : red[800],
        },
        stroke: {
          show: true,
          // curve: 'straight',
          
          colors: Number(change) > 0 ? ["#0A5C15"]: ["#911710"],
           width: 2,
           
      },
        tooltip: {
          enabled:false,
          fixed: {
            enabled: false,
            
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      },
    }
  
    return (
      <>
      <div className='w-full'>
      <Chart options={chartOptions.options}
                series={chartOptions.series}
                type={"area"}
                
                height={size400 ? 35 :25}/>
                 </div>
      </>
     
    )
  }