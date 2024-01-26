import PositionButton from "./PositionButton";
import Input from "./Input";
import { useState } from "react";

export default function PnlForm(){
  

  const [props,setProps] = useState([
    {Label:"Exit Price",Id:"sellingPrice",Placeholder:"Enter Selling or Exit price",Class:"input",inputVal : ""},
    {Label:"Entry Price",Id:"buyingPrice",Placeholder:"Enter Buying or Entry Price",Class:"input",inputVal : ""},
    {Label:"Amount Invested",Id:"amount",Placeholder:"Enter Amount Invested",Class:"input",inputVal : ""},
  ]);

  const handleInput = (id, value) => {
    setProps((prevProps) =>
      prevProps.map((prop) => (prop.Id === id ? { ...prop, inputVal: value } : prop))
    );
  };
 
  return (
    <>
     <form class="pnl-form" action="" >
      <PositionButton/>
      {props.map((prop)=>(
        <>
        <Input Label={prop.Label} Id={prop.Id} Placeholder={prop.Placeholder} Class={prop.Class} inputVal = {prop.inputVal} handleInput={(e) => handleInput(prop.Id, e.target.value)}/>
        
        </>
      ))}
      
      
      <div class="container-pnl-form-btn relative">
        <div id="add-button" class="button-81" >
            CALCULATE
        </div>
        </div>
     </form>

    </>
  )
}