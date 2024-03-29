import { useState } from "react"

export default function Leverage({lev,handleLev}){
  
  const val = lev/125 * 100 + '%';

  return (
    <>

    <div class="range-slider" id="leverage">
        <input type="range" min="1" max="125" value={lev} 
        class="slider" onChange={handleLev}/>
        
        <div style = {{left: val}} class="slider-thumb">
            <div class="tooltip">{lev}</div>
        </div>
        <div style = {{width: val}}class="progress"></div>
    </div>

    </>
  )
}