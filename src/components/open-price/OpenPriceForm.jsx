import PositionButton from "../PositionButton";
import OpenPriceInput from "./OpenPriceInput";
import { useState } from "react";
import Leverage from "../Leverage";

export default function OpenPriceForm({passInput}){
  const [props,setProps] = useState([
    
    {Label:"Entry Price",Id:"buyingPrice",Placeholder:"Enter Buying or Entry Price",Class:"input",inputVal : ""},
    
  ]);

  const [lev,setLev] = useState(20);
  

  const handleInput = (id, value) => {
    if(!isNaN(value) && value >= 0)
    setProps((prevProps) =>
      prevProps.map((prop) => (prop.Id === id ? { ...prop, inputVal: value } : prop))
    );
  };

  const handleSubmit = () => {
    let valueArray = props.map((prop) => Number(prop.inputVal));
    setShowOutput(true);
    valueArray.push(lev);
    valueArray.push(showOutput);
    valueArray.push(isLong)
    passInput(valueArray);
  }

  

  const handleAddInput = () => {
    setProps([...props, { Label: "Entry Price", Id: "buyingPrice", Placeholder: "Enter Buying or Entry Price", Class: "input", inputVal: "" },
    { Label: "Amount Invested", Id: "amount", Placeholder: "Enter Amount Invested", Class: "input", inputVal: "" },]);
  }

  const handleRemoveInput = (i) => {
    setProps((prevProps,index) => prevProps.filter((prop) => i!== index ));
  };
  
 
  return (
    <>
     <form class="openPrice-form" action="" >
      
      
      
      <div className="flex-row ">
      {props.map((prop,index)=>(
        <>
        <OpenPriceInput Label={prop.Label} Id={prop.Id} Placeholder={prop.Placeholder} Class={prop.Class} inputVal = {prop.inputVal} handleInput={(e) => handleInput(prop.Id, e.target.value)}/>
        {/* <div className="bg-[black]" onClick ={()=>handleRemoveInput(index)}>Delete</div> */}
        
        </>
      ))}
      </div>

      {/* <div className="bg-[black]" onClick = {handleAddInput}>+ Add Position</div> */}
      
      
      
     </form>

    </>
  )
}