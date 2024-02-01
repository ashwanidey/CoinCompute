import OpenPriceForm from "./OpenPriceForm";
import OpenPriceResult from "./OpenPriceResult";
import { useState } from "react";
import Widget from "../Widget";
import "./openPrice.css"
import PositionButton from "../PositionButton";
import OpenPriceInput from "./OpenPriceInput";

export default function Pnl(){

  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };

  const handleLong = () => {
    setIsLong(true);
  }
  const handleShort = ()=>{
    setIsLong(false);
  }
  
  const [isLong,setIsLong] = useState(true);
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
      
      <div className="flex justify-center gap-10">
        <div className="">
          <div className="label-input-op">Open</div>
          <div className="label-output "> 1</div>
          </div>
          
        <div className="w-full">
          <div className="label-input-op ">  Entry Price(USDT)</div>
          <OpenPriceInput/>
          
          </div>
        <div className="w-full">
          <div className="label-input-op">Quantity(BTC)</div>
          <OpenPriceInput/>
          </div>
        <div className="">
          <div className="label-input-op"> Action</div>
          <div className="bg-black w-10 h-10"></div>
          </div>
      </div>
      
      
      </div>

    </div>
    </>
  )
}