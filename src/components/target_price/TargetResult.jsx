import Output from "../Output";
import { useState, useEffect } from "react";
export default function TargetResult({ valueArray }){

  const [props, setProps] = useState([
    { Class: "output-box", Label: "Target: ", Value: "-", Sign: "USDT", Id: "margin" },
    
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
  )
}