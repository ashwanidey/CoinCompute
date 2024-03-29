import LiquidationForm from "./LiquidationForm";
import { useState } from "react";
import LiquidationResult from "./LiquidationResult";

import {PriceScroller} from "../../priceScroller/PriceScroller"


export default function Pnl(){

  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };
  return (
    <>
   <div class="container-pnl " id="pnl-toogle">
    <PriceScroller/>
      <span class="Heading">Futures Calulator</span>
      <span className="pnl-form-title ">Liquidation Price</span>
      <div class="wrapper">
      
      <LiquidationForm passInput={handleResultData}/>
      <LiquidationResult valueArray={FormData}/>
      </div>

    </div>
    </>
  )
}