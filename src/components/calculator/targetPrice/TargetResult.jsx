import Output from "../calculatorComponents/Output";
import { useState, useEffect } from "react";
import { calculateTargetPrice } from "../../../functions/calculator";
export default function TargetResult({ valueArray }){

  const [props, setProps] = useState([
    { Class: "output-box", Label: "Target: ", Value: "-", Sign: "USDT", Id: "margin" },
    
  ]);

     // [ep,roe,lev,showoutput,isLOng]
     useEffect(() => {
      if(valueArray[3]){
        const ep = valueArray[0];
        const roe = valueArray[1];
        const lev= valueArray[2];
        const isLong = valueArray[4];
        const liqPrice = calculateTargetPrice(ep,roe,lev,isLong);
        const updatedProps = props.map((prop, index) => {
          return { ...prop, Value: liqPrice};
        });
        setProps(updatedProps);
      }
    }, [valueArray])
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