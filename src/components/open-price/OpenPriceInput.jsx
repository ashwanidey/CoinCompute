import { useState } from "react"

export default function OpenPriceInput({Label="test",Id="i",Placeholder="Test",Class="input",inputVal,handleInput}){

  return (
    <>
    <div className="flex">
    <div className="wrap-input-openPrice">
        <span className="label-input">{Label}</span>
        <input type="text" id={Id} className={Class}
        placeholder={Placeholder} onkeypress="return isNumberKey(event)"  value = {inputVal} onChange = {handleInput} autoComplete="off"/>
        
    </div>
    
    </div>
   
    </>
  )
}