import PnlForm from "../PnlForm";
import { useState } from "react";
import Result from "../Result";


export default function Pnl(){

  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };
  return (
    <>
   <div class="container-pnl " id="pnl-toogle">
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