import OpenPriceForm from "./OpenPriceForm";
import OpenPriceResult from "./OpenPriceResult";
import { useState } from "react";
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



  
  return (
    <>
   <div class="container-openprice" id="pnl-toogle">
    <Widget/>
    
      <span class="Heading">Futures Calulator</span>
      <span class="pnl-form-title">Open Price</span>
      <div class="w-[90%]">
          <div className="flex" >
      <PositionButton long= {isLong} handleLong={handleLong} handleShort={handleShort}/>
      <OpenPriceResult valueArray={FormData}/>

      </div>

     <OpenPriceForm  passInput= {handleResultData}/>
     </div>

    </div>
    </>
  )
}