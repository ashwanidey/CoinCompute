import PnlForm from "./PnlForm";
import { useState } from "react";
import Result from "./Result";


export default function Pnl(){

  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };
  const script = document.createElement('script');
    script.src = 'https://static.coinstats.app/widgets/coin-price-marquee-widget.js';
    script.async = true;
    document.body.appendChild(script);
 
  return (
    <>
   <div class="container-pnl " id="pnl-toogle">
   <coin-stats-marquee-widget locale="en" currency="USD" background="#141E30" status-up-color="#74D492" status-down-color="#FE4747" text-color="#FFFFFF" buttons-color="#FFFFFF" border-color="rgba(255,255,255,0.15)" position="static" font="Roboto, Arial, Helvetica" width="26rem" coins-count="20" ></coin-stats-marquee-widget>
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