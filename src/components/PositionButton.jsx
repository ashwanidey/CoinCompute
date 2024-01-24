import { useState } from "react";
export default function PositionButton(){

  const [long,setLong] = useState(true);

  const longStyle = {
    backgroundColor : long === true ? 'green' : 'white', color : long === true ? 'white' : "#3B3B3B"
  }
  const shortStyle = {
    backgroundColor : long === false ? 'red' : 'white', color : long === false ? 'white' : "#3B3B3B"
  }

  return (
    <>
    <div class="container-position-setter">
        <div id="long-button" style = {longStyle} class="button-28" role="button" onClick={() => (setLong(true))}>LONG</div>
        <div id="short-button" style = {shortStyle} class="button-28" role="button" onClick={() => (setLong(false))}>SHORT</div>
    </div>
    </>
  )
}