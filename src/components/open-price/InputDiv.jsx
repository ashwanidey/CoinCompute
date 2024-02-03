

export default function InputDiv({inputKey,openCount,inputEP,inputQuantity,handleInputEP,handleInputQuantity,handleDeleteEntry}){
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
        <div className="bg-black h-10 w-[7rem]" onClick = {() => handleDeleteEntry(inputKey)}></div>
          
    </div>
    </>
  )
}