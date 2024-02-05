import OpenPriceForm from "./OpenPriceForm";
import OpenPriceResult from "./OpenPriceResult";
import { useState,useEffect } from "react";
import Widget from "../Widget";
import "./openPrice.css"
import PositionButton from "../PositionButton";


import InputDiv from "./InputDiv";

export default function Pnl(){

  const [FormData, setFormData] = useState([]);
  const [isLong,setIsLong] = useState(true);

  const handleResultData = (data) => {
    setFormData(data);
  };

  

  const handleLong = () => {
    setIsLong(true);
  }
  const handleShort = ()=>{
    setIsLong(false);
  }

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);



  
  return (
    <>
   <div class="container-openprice" id="pnl-toogle">
    <Widget/>
    
      <span class="Heading">Futures Calulator</span>
      <span class="pnl-form-title">Open Price</span>
      <div class="w-[90%]">
          <div className="flex" >
        
      <PositionButton OuterBox = "container-position-setter-op" long= {isLong} handleLong={handleLong} handleShort={handleShort} 
      /> 
      {activeMenu && <OpenPriceResult valueArray={FormData}/>}
      </div>
      

     <OpenPriceForm  passInput= {handleResultData}/>
     {!activeMenu && 
     <div className="w-full mt-3">
     <OpenPriceResult valueArray={FormData} />
     </div>}
     </div>

    </div>
    </>
  )
}