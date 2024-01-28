import PnlForm from "./PnlForm";
import { useState } from "react";
import Result from "./Result";
import Widget from "../Widget";


export default function Pnl(){

  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };
  
 
  return (
    <>
   <div class="container-pnl " id="pnl-toogle">
    
      <Widget/>
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