import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";


export const StorageContext = createContext({});

export const StorageProvider  = ({children}) => {

  const [allCoins,setAllCoins] = useState([]);
  const [savedCoins,setSavedCoins] = useState([]);

 


  const saveCoin = (coinId) => {
      let oldCoins = JSON.parse(localStorage.getItem("coins"));
  
      if (oldCoins.includes(coinId)) {
        return ;
      } else {
        let newCoins = [...oldCoins, coinId];
        setAllCoins(newCoins);
        localStorage.setItem("coins", JSON.stringify(newCoins));
      }
    };

    const removeCoin = (coinId) => {
      let oldCoins = JSON.parse(localStorage.getItem("coins"));
  
      let newCoins = oldCoins.filter((coin) => coin !== coinId);
      setAllCoins(newCoins);
  
      localStorage.setItem("coins", JSON.stringify(newCoins));
    };

    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        
        
        'tiers[0]': '1',
        // orderBy: 'marketCap',
        // orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    const options3h = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '3h',
        
        
        'tiers[0]': '1',
        // orderBy: 'marketCap',
        // orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    const options7d = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '7d',
        
        
        'tiers[0]': '1',
        // orderBy: 'marketCap',
        // orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };


    const options30d = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        
        
        'tiers[0]': '1',
        // orderBy: 'marketCap',
        // orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    const getSavedCoins = async(targetCoins) => {
      const newData = {}
      for (let i = 0; i < targetCoins.length; i++) {
        newData[`uuids[${i}]`] = targetCoins[i];
      }
      const newOptions = {
        ...options,
        params: {
          ...options.params,
          ...newData
        }
      }
      // console.log(newOptions);
      try {
        const response = await axios.request(newOptions);
        setSavedCoins(response.data.data.coins);
      } catch (error) {
        console.error(error);
      }
    }


    useEffect(() => {
      if (allCoins.length > 0) {
        getSavedCoins(allCoins);
      } else {
        setSavedCoins([]);
      }
    }, [allCoins]);

  useEffect(() => {
    let isThere = JSON.parse(localStorage.getItem("coins")) || false;

    if(!isThere){
      //set the localstorage with empty array
      localStorage.setItem("coins", JSON.stringify([]));
    }
    else{
      //set the state with the current values from the storge
      let totalCoins = JSON.parse(localStorage.getItem("coins"));
      // console.log(totalCoins)
      setAllCoins(totalCoins);
     
      if (totalCoins.length > 0) {
        getSavedCoins(totalCoins);
      }
    }
  },[])
  return(
    <StorageContext.Provider
    value={{
      allCoins,
      saveCoin,
      removeCoin,
      savedCoins
    }}
  >
    {children}
  </StorageContext.Provider>
  )
} 