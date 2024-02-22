
import { useState } from "react";
import TargetForm from "./TargetForm";
import TargetResult from "./TargetResult";
import Widget from "../Widget";
import {PriceScroller} from "../PriceScroller"

export default function TargetPrice(){
  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };
  return (
    <>
      <div class="container-pnl " id="pnl-toogle">
        <PriceScroller/>
      <span class="Heading">Futures Calulator</span>
      <span class="pnl-form-title">Target Price</span>
      <div class="wrapper">
      
      <TargetForm passInput={handleResultData}/>
      <TargetResult valueArray={FormData}/>
      </div>

    </div>
    </>
  )
}