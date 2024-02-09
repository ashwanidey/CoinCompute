import { createContext,useEffect,useState,useMemo } from "react";
import { CoinList } from "../config/api";


import axios from "axios";

export const CryptoContext = createContext({});


export const CryptoProvider = ({children}) => {

  const [cryptoData, setCryptoData] = useState([]);

  // let config = {
  //   method: 'get',
  // maxBodyLength: Infinity,
  //   url: 'https://rest.coinapi.io/v1/assets',
  //   headers: { 
  //     'Accept': 'text/json', 
  //     'X-CoinAPI-Key': 'F5792C6B-F676-4729-A275-626494431950'
  //   }
  // };

  const getCryptoData  = async () => {
        try {
          const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
          )
            .then((res) => res.json())
            .then((json) => json);
    console.log(data);
    setCryptoData(data);
        } catch (error) {
          console.log(error);
        }
  }

  useEffect(() =>{
    getCryptoData();
  },[])
  
  
  return (
    <CryptoContext.Provider value = {{cryptoData}}>
      {children}
    </CryptoContext.Provider>
  )
}