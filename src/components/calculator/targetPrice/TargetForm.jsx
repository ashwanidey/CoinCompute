import PositionButton from "../calculatorComponents/PositionButton";
import Input from "../calculatorComponents/Input";
import Leverage from "../calculatorComponents/Leverage";
import { useState } from "react";

export default function TargetForm({passInput}){


  const [props,setProps] = useState([
    {Label:"Exit Price",Id:"sellingPrice",Placeholder:"Enter Selling or Exit price",Class:"input",inputVal : ""},
    {Label:"ROE",Id:"roe",Placeholder:"Enter Buying or Entry Price",Class:"input",inputVal : ""},
    
  ]);

  const [lev,setLev] = useState(20);
  const [showOutput,setShowOutput] = useState(false);
  const [isLong,setIsLong] = useState(true);

  const handleInput = (id, value) => {
    if(!isNaN(value) && value >= 0){
    setProps((prevProps) =>
      prevProps.map((prop) => (prop.Id === id ? { ...prop, inputVal: value } : prop))
    );
    }
  };

  const handleSubmit = () => {
    let valueArray = props.map((prop) => Number(prop.inputVal));
    setShowOutput(true);
    valueArray.push(lev);
    valueArray.push(showOutput);
    valueArray.push(isLong)
    passInput(valueArray);
  }

  const handleLong = () => {
    setIsLong(true);
  }
  const handleShort = ()=>{
    setIsLong(false);
  }
  
 
  return (
    <>
     <form class="pnl-form" action="" >
      <PositionButton long= {isLong} handleLong={handleLong} handleShort={handleShort}/>
      <Leverage lev= {lev} handleLev={(e) => setLev(e.target.value)}/>
      {props.map((prop)=>(
        <>
        <Input Label={prop.Label} Id={prop.Id} Placeholder={prop.Placeholder} Class={prop.Class} inputVal = {prop.inputVal} handleInput={(e) => handleInput(prop.Id, e.target.value)}/>
        
        </>
      ))}
      
      
      <div class="container-pnl-form-btn relative">
        <div id="add-button" class="button-81" onClick={handleSubmit}>
            CALCULATE
        </div>
        </div>
     </form>

     

    </>
  )
}