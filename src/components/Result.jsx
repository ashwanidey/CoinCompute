import Output from "./Output";

export default function Result(){
  const props = [
    {Class:"output-box",Label:"Initial Margin : ",Value:"0.00",Sign:"USD",Id:"margin"},
    {Class:"output-pnl-box",Label:"PNL :",Value:"0.00",Sign:"USD",Id:"pnl"},
    {Class:"label-output",Label:"ROE : ",Value:"-",Sign:"%",Id:"roe"},
    {Class:"label-output",Label:"Quantity : ",Value:"0.00",Sign:"BTC",Id:"quantity"},
    
  ]
  return (
    <>
     <div class="container-pnl-output bg-blue-box">
      <span class="output-heading">Result</span>
      {props.map((prop) => (
        <Output Class = {prop.Class} Label={prop.Label} Value={prop.Value} Sign={prop.Sign} Id = {prop.Id}/>
      ))}
     </div>
    </>
  )
}