import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PnlForm from './components/PnlForm'
import Result from './components/Result'


function App() {
  const [FormData, setFormData] = useState([]);

  const handleResultData = (data) => {
    setFormData(data);
  };

 

  return (
    <>
    <div class="container-pnl " id="pnl-toogle">
      <span class="Heading">Futures Calulator</span>
      <span class="pnl-form-title">Profit and Loss</span>
      <div class="wrapper">
      <PnlForm passInput={handleResultData}/>
      <Result valueArray={FormData}/>
      </div>
      
      

    </div>
    
        
    </>
  )
}

export default App
