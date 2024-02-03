import { useState } from "react"

export default function OpenPriceInput({Placeholder="Test",inputVal,handleInput}){

  return (
    <>
   
    <div className="wrap-input-openPrice">
        
        <input type="text" className="input"
        placeholder={Placeholder} value = {inputVal} onChange = {handleInput} autoComplete="off"/>
        
    </div>
    
    
   
    </>
  )
}