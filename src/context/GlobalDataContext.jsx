import { createContext, useEffect, useState ,useLayoutEffect} from "react";
import axios from "axios";

export const GlobalDataContext = createContext({});

export const GlobalDataProvider = ({children}) => {

  const [globalData,setGlobalData] = useState({});
  const [data,setData] = useState([]);
  const [bestCoins,setBestCoins] = useState([]);

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

  const optionsEachData = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const getData = async() => {
    try {
      const response = await axios.request(options);
      const bestCoinsData = response.data.data.bestCoins;
      
      const uuids = bestCoinsData.map(item => item.uuid);
      // console.log(uuids);
      setBestCoins(uuids);
      
      setGlobalData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const getBestCoins = async({bestCoins}) => {
    const newData = {}
      for (let i = 0; i < bestCoins.length; i++) {
        newData[`uuids[${i}]`] = bestCoins[i];
      }

     
      const newOptions = {
        ...optionsEachData,
        params: {
          ...optionsEachData.params,
          ...newData
        }
      }
      // console.log(bestCoins);
      // console.log(newOptions)
      try {
        const response = await axios.request(newOptions);    
        setData(response.data.data.coins);
      } catch (error) {
        console.error(error);
      }
  }

  const manipulateData = () => {
    // console.log(data)
    
      globalData.bestCoins.forEach((item1) => {
        data.forEach((item2) => {
          if (item1.uuid === item2.uuid) {
            item1.price = item2.price;
            item1.change = item2.change;
          }
        });
      });
      console.log(globalData.bestCoins)
      
  }


  useEffect(() => {
    if(data.length > 0){
      manipulateData();
    }
  },[data,bestCoins])
  

  
  useEffect(() => {
    if(bestCoins.length > 0){
      getBestCoins({bestCoins});
      
    }
    
    else getBestCoins();
  },[bestCoins])

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