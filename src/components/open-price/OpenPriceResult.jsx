import Output from "../Output";
import { useState, useEffect } from "react";


export default function OpenPriceResult({ valueArray }){
  const [props, setProps] = useState([
    { Class: "output-box", Label: "Avg Price (USDT): ", Value: "-", Sign: "", Id: "margin" },
    
    
  ]);

 

  return (
    <>
      <div className="container-openPrice-output bg-blue-box">
        <span className="output-heading">Result</span>
        {props.map((prop) => (
          <Output Class={prop.Class} Label={prop.Label} Value={prop.Value} Sign={prop.Sign} Id={prop.Id} key={prop.Id} />
        ))}
      </div>
    </>
  );
}