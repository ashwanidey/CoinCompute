import Output from "../Output";
import { useState, useEffect } from "react";

export default function LiquidationResult({ valueArray }){
  const [props, setProps] = useState([
    { Class: "output-box", Label: "Initial Margin : ", Value: "0.00", Sign: "USD", Id: "margin" },
    { Class: "output-pnl-box", Label: "PNL :", Value: "0.00", Sign: "USD", Id: "pnl" },
    { Class: "label-output", Label: "ROE : ", Value: "-", Sign: "%", Id: "roe" },
    { Class: "label-output", Label: "Quantity : ", Value: "0.00", Sign: "BTC", Id: "quantity" },
  ]);

 

  return (
    <>
      <div className="container-pnl-output bg-blue-box">
        <span className="output-heading">Result</span>
        {props.map((prop) => (
          <Output Class={prop.Class} Label={prop.Label} Value={prop.Value} Sign={prop.Sign} Id={prop.Id} key={prop.Id} />
        ))}
      </div>
    </>
  );
}