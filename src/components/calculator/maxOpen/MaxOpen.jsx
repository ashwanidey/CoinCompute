import MaxOpenForm from "./MaxOpenForm";
import { useState } from "react";
import MaxOpenResult from "./MaxOpenResult";
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
      <span class="pnl-form-title">Max Open</span>
      <div class="wrapper">
      
      <MaxOpenForm passInput={handleResultData}/>
      <MaxOpenResult valueArray={FormData}/>
      </div>

    </div>
    </>
  )
}