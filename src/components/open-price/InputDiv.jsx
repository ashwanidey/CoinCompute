import OpenPriceInput from "./OpenPriceInput"

export default function InputDiv({openCount,inputEP,inputQuantity,handleInputEP,handleInputQuantity}){
  return (
    <>
    <div className="input-op gap-10 ">
          
          <div className="label-output w-[5rem]"> {openCount}</div>
      <div className="wrap-input-openPrice">
        
        <input type="text" className="input"
        placeholder="Enter Entry Price" value = {inputEP} onChange = {handleInputEP} autoComplete="off"/>
        
      </div>
      <div className="wrap-input-openPrice">
          
          <input type="text" className="input"
          placeholder="Enter Quantity" value = {inputQuantity} onChange = {handleInputQuantity} autoComplete="off"/>
          
      </div>
        <div className="bg-black w-10 h-10"></div>
          
    </div>
    </>
  )
}