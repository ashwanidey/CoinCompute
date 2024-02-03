import PositionButton from "../PositionButton";

import { useState } from "react";
import Leverage from "../Leverage";
import InputDiv from "./InputDiv";

export default function OpenPriceForm({passInput}){
  const [props,setProps] = useState([
    {key : 1,openCount : 1,inputEP : "",inputQuantity : ""}
  ])

  const handleSubmit = () => {
    let valueArray = props.map((prop) => [Number(prop.inputEP),Number(prop.inputQuantity)]);
    passInput(valueArray);
    
  }

  

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
  


  const handleDeleteEntry = (id) => {
    if(props.length === 1) return ;
    
    setProps((prevProps) => prevProps.filter((prop) => prop.key !== id).map((propi,index) =>(
      {...propi,key : index + 1,openCount : index + 1}
    )));
    
    
  };

  
  
  
 
  return (
    <>
     


<div className="flex-col justify-center space-y-10">

  <div className="labels-op gap-10">
  <div className="label-input-op w-[5rem]">Open</div>
  <div className="label-input-op w-full">  Entry Price(USDT)</div>
  <div className="label-input-op w-full">Quantity(BTC)</div>
  <div className="label-input-op w-[5rem]"> Action</div>
  </div>


  {props.map((prop)=>(
    <InputDiv inputKey = {prop.key} openCount={prop.openCount} inputEP = {prop.inputEP} inputQuantity = {prop.inputQuantity} handleInputEP={(e) => handleInputEP(prop.key,e.target.value)} handleInputQuantity={(e) => handleInputQuantity(prop.key,e.target.value)} handleDeleteEntry={handleDeleteEntry}/>
  ))}
  
  
    
 
</div>

<div className="text-white" onClick={handleAddInput}>+ Add Button</div>
<div class="container-pnl-form-btn relative">
        <div id="add-button" class="button-81" onClick={handleSubmit}>
            CALCULATE
        </div>
        </div>



    </>
  )
}