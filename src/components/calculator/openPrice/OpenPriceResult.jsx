import { calculateOpenPRice } from "../../../functions/calculator";
import Output from "../calculatorComponents/Output";
import { useState, useEffect } from "react";


export default function OpenPriceResult({ valueArray }){
  const [props, setProps] = useState([
    { Class: "output-box", Label: "Avg Price (USDT): ", Value: "-", Sign: "", Id: "margin" },
    
    
  ]);

  useEffect(() => {
    const openPrice = calculateOpenPRice(valueArray);
    const updatedProps = props.map((prop, index) => {
      return { ...prop, Value: openPrice};
    });
    setProps(updatedProps);
  },[valueArray])

  return (
    <>
      <div className="container-openPrice-output bg-blue-box">
        <span className="output-heading">Result</span>
        {props.map((prop) => (
          <Output Class={prop.Class} Label={prop.Label} Value={prop.Value} Sign={prop.Sign} Id={prop.Id}/>
        ))}
      </div>
    </>
  );
}