import { createContext,useEffect,useState} from "react";
import { CoinList } from "../config/api";



import axios from "axios";

export const ScreenSizeContext = createContext({});


export const SizeProvider = ({children}) => {

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  const [size400,setSize400] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1280) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  useEffect(() => {
    if (screenSize <= 400) {
      setSize400(false);
    } else {
      setSize400(true);
    }
  }, [screenSize]);
  
  return (
    <ScreenSizeContext.Provider value = {{activeMenu,size400}}>
      {children}
    </ScreenSizeContext.Provider>
  )
}