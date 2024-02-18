import { createContext, useEffect, useState ,useLayoutEffect} from "react";
import axios from "axios";

export const CryptoNewsContext = createContext({});

export const CryptoNewsProvider = ({children}) => {

  const [news,setNews] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
  };

  const getNews = async() => {
    try {
      const response = await axios.request(options);
      setNews(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(() =>{
    getNews()
  },[])
  return(
    <CryptoNewsContext.Provider
    value={{
      news,
    }}
  >
    {children}
  </CryptoNewsContext.Provider>
  )
}