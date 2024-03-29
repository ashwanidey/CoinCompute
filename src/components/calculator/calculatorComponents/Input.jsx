import { useState } from "react"

export default function Input({Label,Id,Placeholder,Class,inputVal,handleInput}){

  return (
    <>
    <div className="wrap-input">
        <span className="label-input">{Label}</span>
        <input type="text" id={Id} className={Class}
        placeholder={Placeholder} onkeypress="return isNumberKey(event)"  value = {inputVal} onChange = {handleInput} autoComplete="off"/>
    </div>
   
    </>
  )
}