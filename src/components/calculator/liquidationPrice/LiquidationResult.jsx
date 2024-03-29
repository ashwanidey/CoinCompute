import Output from "../calculatorComponents/Output";
import { useState, useEffect } from "react";
import { calculateLiquidationPrice } from "../../../functions/calculator";

export default function LiquidationResult({ valueArray }){
  const [props, setProps] = useState([
    { Class: "output-box", Label: "Liquidation Price: ", Value: "-", Sign: "USDT", Id: "margin" },
    
  ]);
  // [ep,cost,lev,showoutput,isLOng]
  useEffect(() => {
    if(valueArray[3]){
      const ep = valueArray[0];
      const cost = valueArray[1];
      const lev= valueArray[2];
      const isLong = valueArray[4];
      const liqPrice = calculateLiquidationPrice(ep,lev,cost,isLong);
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
  );
}