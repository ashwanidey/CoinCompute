import Output from "./Output";
import { calculateMargin, calculateProfit, calculateQuantity, calculateRoe } from "../functions/calculator";

import { useState, useEffect } from "react";

export default function Result({ valueArray }) {
  const [props, setProps] = useState([
    { Class: "output-box", Label: "Initial Margin : ", Value: "0.00", Sign: "USD", Id: "margin" },
    { Class: "output-pnl-box", Label: "PNL :", Value: "0.00", Sign: "USD", Id: "pnl" },
    { Class: "label-output", Label: "ROE : ", Value: "-", Sign: "%", Id: "roe" },
    { Class: "label-output", Label: "Quantity : ", Value: "0.00", Sign: "BTC", Id: "quantity" },
  ]);

  useEffect(() => {
    if (valueArray[4]) {
      const quantity = calculateQuantity(valueArray[2], valueArray[3], valueArray[1]);
      const profit = calculateProfit(valueArray[2], valueArray[3], valueArray[1], valueArray[5], valueArray[0]);
      const margin = calculateMargin(valueArray[2], valueArray[3], valueArray[1]);
      const roe = calculateRoe(valueArray[2], valueArray[3], valueArray[1], valueArray[5], valueArray[0]);

      const updatedProps = props.map((prop, index) => {
        return { ...prop, Value: index === 0 ? margin.toFixed(2) : index === 1 ? profit.toFixed(2) : index === 2 ? roe : quantity };
      });

      setProps(updatedProps);
    }
  }, [valueArray]);

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
