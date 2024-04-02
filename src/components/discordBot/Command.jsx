import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./bot.css"


const cards = [
  {
    heading : 'TRADE COMMANDS' , Details : [
      {commandName : "cc trade", info : "Starts the trading setup" , aliases : "['t']", example : ["cct"]},
      {commandName : "cc trade updates", info : "Lists all the existing trade updates" , aliases : "['tu']", example : ["cctu"]},
      {commandName : "cc trade profit", info : "Lists all the existing trade profits" , aliases : "['tp']", example : ["cctp"]},
    ]
  },
  {
    heading : 'Crypto Commands' , Details : [
      {commandName : "cc search [symbolName]", info : "Searches the mentioned symbolName or crypto." , aliases : "['s']", example : ["ccs bitcoin" ,"ccs doge"]},
      {commandName : "cc chart [symbolName]", info : "Shows chart of asset." , aliases : "['c']", example :  ["ccc bitcoin" ,"ccc doge"]},
      {commandName : "cc price [symbolName]", info : "Shows detail about the crypto." , aliases : "['p']", example : ["ccp btc","ccp doge"]},
    ]
  },
  {
    heading : 'SUB COMMANDS' , Details : [
      {commandName : "cc quickPrice [symbolName]", info : "Shows quick price of an asset." , aliases : "['q']", example : ["ccq btc","ccq doge"]},
      {commandName : "cc currency", info : "Shows available fiat." , aliases : "[\"fiat\", \"f\"]", example : ["ccf","ccf inr"]},
      {commandName : "cc subscribe", info : "Shows an eth address which can be used to donate eth." , aliases : "[\"sub\", \"b\"]", example : ["ccb","ccsub"]},
    ]
  },
  {
    heading : 'UTIL Commands' , Details : [
      {commandName : "cc help", info : "List all of the available commands" , aliases : "['commands', 'h']", example : ["cchelp cch"]},
    ]
  }
]

const Command = () => {
  return (
     <>
     <div className='py-[10px] px-[5%] '>
     <h1 className=' font-[900] text-[3rem] '>COMMANDS</h1>
     <div className='grid md:grid-cols-2 grid-cols-1 '>
     
     {cards.map(card => {
      return(
        <>
        <div className='flex flex-col md:pr-[100px]  gap-4  my-4'>
          <h1 className='text-[1.3rem] font-[800]'>{(card.heading).toUpperCase()}</h1>
          <Accordion>
          {card.Details.map((detail,index) => {
            return (
              <>
              <Accordion.Item eventKey={index} >
              <Accordion.Header className='text-[1.8rem]'>{detail.commandName}</Accordion.Header>
              <Accordion.Body className='flex flex-col gap-2'>
                <p className='text-[1rem] font-[500]'>Info: {detail.info}</p>
                <p className='text-[1rem] font-[500]'>Aliases : <span className='bg-[#f3f4f5] pb-[0.25rem] px-[0.5rem] rounded-sm text-[#233b53]'>{detail.aliases}</span></p>
                <p className='text-[1rem] font-[500]'>Examples : 
                {detail.example.map(eg => {
                  return (
<span className='bg-[#f3f4f5] pb-[0.25rem] px-[0.5rem] ml-4 rounded-sm text-[#4e6e8e]'>{eg}</span>
                  )
                })}</p>
                
              </Accordion.Body>
            </Accordion.Item>
            </>
            )
            
            
          })}
          </Accordion>
          
        </div>
        </>
      )
     })}
     </div>
     </div>
     </>
  )
}

export default Command