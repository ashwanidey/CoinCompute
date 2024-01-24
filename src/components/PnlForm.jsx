import PositionButton from "./PositionButton";
import Input from "./Input";

export default function PnlForm(){
  const props = [
    {Label:"Exit Price",Id:"sellingPrice",Placeholder:"Enter Selling or Exit price",Class:"input"},
    {Label:"Entry Price",Id:"buyingPrice",Placeholder:"Enter Buying or Entry Price",Class:"input"},
    {Label:"Amount Invested",Id:"amount",Placeholder:"Enter Amount Invested",Class:"input"},
  ]
  return (
    <>
     <form class="pnl-form" action="" >
      <PositionButton/>
      {props.map((prop)=>(
        <Input Label={prop.Label} Id={prop.Id} Placeholder={prop.Placeholder} Class={prop.Class}/>
      ))}
      
      
      <div class="container-pnl-form-btn relative">
        <div id="add-button" class="button-81" >
            CALCULATE
        </div>
        </div>
     </form>

    </>
  )
}