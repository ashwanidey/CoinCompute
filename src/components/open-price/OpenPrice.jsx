import OpenPriceForm from "./OpenPriceForm";
import OpenPriceResult from "./OpenPriceResult";
import { useState } from "react";
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
      <span class="pnl-form-title">Open Price</span>
      <div class="wrapper">
      
      <OpenPriceForm passInput={handleResultData}/>
      <OpenPriceResult valueArray={FormData}/>
      </div>

    </div>
    </>
  )
}