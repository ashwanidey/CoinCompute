import PositionButton from "./PositionButton";
import Input from "./Input";

export default function PnlForm(){
  return (
    <>
     <form class="pnl-form" action="" >
      <PositionButton/>
      <Input Label = "Exit Price" Id="sellingPrice" Placeholder="Enter Selling or Exit price" Class="input"/>
      <Input Label = "Entry Price" Id="buyingPrice" Placeholder="Enter Buying or Entry Price" Class="input"/>
      <Input Label = "Amount Invested" Id="amount" Placeholder="Enter Amount Invested" Class="input"/>
     </form>

    </>
  )
}