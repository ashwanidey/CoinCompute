import PositionButton from "../calculatorComponents/PositionButton";
import Input from "../calculatorComponents/Input";
import { useState } from "react";
import Leverage from "../calculatorComponents/Leverage";

export default function LiquidationForm({passInput}){
  const [props,setProps] = useState([
    {Label:"Entry Price",Id:"buyingPrice",Placeholder:"Enter Entry Price",Class:"input",inputVal : ""},
    {Label:"Cost ( Margin )",Id:"amount",Placeholder:"Enter Cost or Margin",Class:"input",inputVal : ""},
    // {Label:"Balance",Id:"Balance",Placeholder:"Enter Balance Available",Class:"input",inputVal : ""},
  ]);

  const [lev,setLev] = useState(20);
  const [showOutput,setShowOutput] = useState(false);
  const [isLong,setIsLong] = useState(true);

  const handleInput = (id, value) => {
    if(!isNaN(value) && value >= 0)
    setProps((prevProps) =>
      prevProps.map((prop) => (prop.Id === id ? { ...prop, inputVal: value } : prop))
    );
  };

  const handleSubmit = () => {
    const valueArray = props.map((prop) => Number(prop.inputVal));
    setShowOutput(true);

    const updatedValueArray = [...valueArray, lev, showOutput, isLong];
  
    
    passInput(updatedValueArray);
  };

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