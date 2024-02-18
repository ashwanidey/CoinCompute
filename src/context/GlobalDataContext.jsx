import { createContext, useEffect, useState ,useLayoutEffect} from "react";
import axios from "axios";

export const GlobalDataContext = createContext({});

export const GlobalDataProvider = ({children}) => {

  const [globalData,setGlobalData] = useState({});

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl'
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const getData = async() => {
    try {
      const response = await axios.request(options);
      setGlobalData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(() =>{
    getData()
  },[])
  return(
    <GlobalDataContext.Provider
    value={{
      globalData,
    }}
  >
    {children}
  </GlobalDataContext.Provider>
  )
}