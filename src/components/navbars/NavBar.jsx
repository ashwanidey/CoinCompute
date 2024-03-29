import { useContext } from "react"
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom"

import  {ScreenSizeContext}  from "../../context/ScreenSize"



const LinkStyle = {
    display: "flex",
    alignItems: "center",
    width : "100%",
    height: "2.25rem",
    paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
}
export default function NavBar(){

    const {size400} = useContext(ScreenSizeContext);
  return (
    <>
    
        <div className="hidden md:block m-2 lg:flex flex-col items-center min-w-[17%]  overflow-hidden text-[#242424] bg-[#B3BCCC] " style={{borderRadius: "20px 0px 0px 20px"}}>
            
            <div className="w-[100%] px-2">
                <div className="flex flex-col items-center w-full mt-3 ">
                    <NavLink id="pnl-tag" className="flex items-center w-full h-9 px-3 mt-2 rounded hover:bg-[#3458B1] " to="/calculator/pnl">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="ml-2 text-sm font-medium">PNL</span>
                    </NavLink>
                    <NavLink id="open-price-tag" className="flex items-center w-full h-9 px-3 mt-2 rounded  hover:text-[#02146A]" to="/calculator/OpenPrice">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium">Open Price</span>
                    </NavLink>
                    <NavLink a id="target-price-tag" className="flex items-center w-full h-9 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/calculator/targetPrice">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium">Target Price</span>
                    </NavLink>
                    <NavLink id="liquidation-price-tag" className="flex items-center w-full h-9 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/calculator/liquidationPrice">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium">Liquidation Price</span>
                    </NavLink>
                    <NavLink id="max-open-tag" className="flex items-center w-full h-9 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" to="/calculator/maxOpen">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                        <span className="ml-2 text-sm font-medium">Max Open</span>
                    </NavLink>
                    
                </div>
                
            </div>
            
        </div>
        
        

        <div className="m-2 md:hidden flex flex-row  items-center md:w-[40vh]  overflow-y-hidden  mb-3 text-[#070E13] bg-[#B3BCCC]  rounded-full pb-2">
            
            <div className="w-full px-2">
                <div className="flex sm:flex-col  flex-row items-center w-full ">
                    <NavLink id="pnl-tag1" className="flex items-center w-full h-10 px-2 mt-2 rounded-full hover:bg-gray-700 hover:text-gray-300" to="/calculator/pnl">
                        
                        <span className=" text-sm font-medium">PNL</span>
                    </NavLink>
                    <NavLink id="open-price-tag1" className="flex items-center w-full h-9 px-2 mt-2 rounded-full hover:bg-gray-700 hover:text-gray-300"  to="/calculator/OpenPrice" style={{ whiteSpace: 'nowrap' }}>
                        
                        <span className="text-sm font-medium w-[100%]">Open Price</span>
                    </NavLink>
                    <NavLink id="target-price-tag1" className="flex items-center w-full h-9 px-2 mt-2 rounded-full hover:bg-gray-700 hover:text-gray-300" to="/calculator/targetPrice" style={{ whiteSpace: 'nowrap' }}>
                        <span className="text-sm font-medium">Target Price</span>
                    </NavLink>
                    <NavLink id="liquidation-price-tag1" className="flex items-center w-full h-9 px-2 mt-2 rounded-full hover:bg-gray-700 hover:text-gray-300"to="/calculator/liquidationPrice" style={{ whiteSpace: 'nowrap' }}>
                        
                        <span className="text-sm font-medium">Liquidation Price</span>
                    </NavLink>
                    <NavLink id="max-open-tag1" className="flex items-center  h-9 px-2 mt-2 rounded-full hover:bg-gray-700 hover:text-gray-300" to="/calculator/maxOpen" style={{ whiteSpace: 'nowrap' }}>
                        
                        <span className="text-sm font-medium">Max Open</span>
                    </NavLink>
                    
                </div>
                
            </div>
            
        </div>
        
    </>
  )
}