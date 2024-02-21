import PnlForm from "./PnlForm";
import { useContext, useState } from "react";
import Result from "./Result";
import Widget from "../Widget";
import { PriceScroller } from "../PriceScroller";



export default function Pnl(){

  const [FormData, setFormData] = useState([]);
  

  const handleResultData = (data) => {
    setFormData(data);
  };
  
 
  return (
    <>
   <div class="container-pnl " id="pnl-toogle">
    
      {/* <Widget/> */}
      <PriceScroller/>
      <span class="Heading">Futures Calulator</span>
      <span class="pnl-form-title">Profit and Loss</span>
      <div class="wrapper">
      
      <PnlForm passInput={handleResultData}/>
      <Result valueArray={FormData}/>
      </div>

    </div>
    </>
  )
}