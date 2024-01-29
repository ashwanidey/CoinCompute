import { calculateAmount, calculateMaxOpen } from "../../functions/calculator";
import Output from "../Output";
import { useState, useEffect } from "react";

export default function MaxOpenResult({ valueArray }){
  const [props, setProps] = useState([
    { Class: "output-box", Label: "Max Open :  ", Value: "-", Sign: "BTC", Id: "margin" },
    { Class: "output-pnl-box", Label: "Max Open (USDT) : ", Value: "-", Sign: "USDT", Id: "pnl" },
   
  ]);
  // [ep,balance,lev,showoutput,isLOng]
  useEffect(() => {
    if(valueArray[3]){
      const ep = valueArray[0];
      const balance = valueArray[1];
      const lev= valueArray[2];
      const isLong = valueArray[4];
      const amt = calculateAmount(lev,balance);
      const maxOpen = calculateMaxOpen(amt,lev,ep);
      const updatedProps = props.map((prop, index) => {
        return { ...prop, Value: index === 0 ?  maxOpen : amt};
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