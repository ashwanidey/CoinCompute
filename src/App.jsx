import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PnlForm from './components/PnlForm'


function App() {


  return (
    <>
    <div class="container-pnl " id="pnl-toogle">
      <span class="Heading">Futures Calulator</span>
      <span class="pnl-form-title">Profit and Loss</span>
      <PnlForm/>
      

    </div>
    
        
    </>
  )
}

export default App
