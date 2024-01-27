import LiquidationForm from "./LiquidationForm";
import { useState } from "react";
import LiquidationResult from "./LiquidationResult";


export default function Pnl(){

  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };
  return (
    <>
   <div class="container-pnl " id="pnl-toogle">
      <span class="Heading">Futures Calulator</span>
      <span class="pnl-form-title">Liquidation Price</span>
      <div class="wrapper">
      
      <LiquidationForm passInput={handleResultData}/>
      <LiquidationResult valueArray={FormData}/>
      </div>

    </div>
    </>
  )
}