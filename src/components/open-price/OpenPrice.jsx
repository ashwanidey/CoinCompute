import OpenPriceForm from "./OpenPriceForm";
import OpenPriceResult from "./OpenPriceResult";
import { useState } from "react";
import Widget from "../Widget";
import "./openPrice.css"
import PositionButton from "../PositionButton";
import OpenPriceInput from "./OpenPriceInput";
import InputDiv from "./InputDiv";

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

  const [props,setProps] = useState([
    {key : 1,openCount : 1,inputEP : "",inputQuantity : ""}
  ])

  const handleAddInput  = () => {
    const newObj = {key : props[props.length-1].key +1,openCount : props[props.length-1].openCount  +1,inputEP : "",inputQuantity : ""};

    setProps([...props,newObj]);

    
    

  }

  const handleInputEP = (id, value) => {
    if(!isNaN(value) && value >= 0)
    setProps((prevProps) =>
      prevProps.map((prop) => (prop.key === id ? { ...prop, inputEP: value } : prop))
    );
  };

  const handleInputQuantity = (id, value) => {
    if(!isNaN(value) && value >= 0)
    setProps((prevProps) =>
      prevProps.map((prop) => (prop.key === id ? { ...prop, inputQuantity: value } : prop))
    );
  };
  
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
      
      <div className="flex-col justify-center space-y-10">

        <div className="labels-op gap-10">
        <div className="label-input-op w-[5rem]">Open</div>
        <div className="label-input-op w-full">  Entry Price(USDT)</div>
        <div className="label-input-op w-full">Quantity(BTC)</div>
        <div className="label-input-op"> Action</div>
        </div>


        {props.map((prop)=>(
          <InputDiv openCount={prop.openCount} inputEP = {prop.inputEP} inputQuantity = {prop.inputQuantity} handleInputEP={(e) => handleInputEP(prop.key,e.target.value)} handleInputQuantity={(e) => handleInputQuantity(prop.key,e.target.value)}/>
        ))}
        
        
          
       
    </div>

      <div className="text-white" onClick={handleAddInput}>+ Add Button</div>
      
      
      </div>

    </div>
    </>
  )
}