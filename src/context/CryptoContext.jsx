import { createContext,useEffect,useState,useMemo } from "react";
import { CoinList } from "../config/api";


import axios from "axios";

export const CryptoContext = createContext({});


export const CryptoProvider = ({children}) => {
  const [cryptoData, setCryptoData] = useState([]);
  
  
  const [searched, setSearched] = useState([]);
  const [searchedOptions,setSearchedOptions] = useState([]);
  const [searchVal,setSearchVal] = useState("");
  const [limit,setLimit] = useState(10);
  const [orderBy,setOrderBy] = useState("");
  const [order,setOrder] = useState("");
  
  
  // const requestSearch = (searchVal) => {
  //   const filteredRows = cryptoData.filter((row) => {
  //     return row.name.toLowerCase().includes(searchVal.toLowerCase());
  //   });
  //   setSearched(filteredRows);
    
  // };
  // useEffect(() =>{
  //   requestSearch(searchVal);
  // },[searchVal])

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };


  const options24h = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: orderBy !== "" ? orderBy : "marketCap",
      orderDirection: order !== '' ? order : 'desc',
      limit: limit.toString(),
      offset: '0',
      search: searchVal,
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
      
      timePeriod: '7d',
      'tiers[0]': '1',
      orderBy: orderBy !== "" ? orderBy : "marketCap",
      orderDirection: order !== '' ? order : 'desc',
      limit: limit.toString(),
      search: searchVal,
      
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const options3h  = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      
      timePeriod: '3h',
      'tiers[0]': '1',
      orderBy: orderBy !== "" ? orderBy : "marketCap",
      orderDirection: order !== '' ? order : 'desc',
      limit: limit.toString(),
      search: searchVal,
      
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };


  

  const options30d  = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      
      timePeriod: '3h',
      'tiers[0]': '1',
      orderBy: orderBy !== "" ? orderBy : "marketCap",
      orderDirection: order !== '' ? order : 'desc',
      limit: limit.toString(),
      search: searchVal,
      
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  

  const getCryptoData  = async () => {

    try {
      const data24h = await axios.request(options24h);
      const data7d = await axios.request(options7d);
      const data3h = await axios.request(options3h);
      const data30d = await axios.request(options30d);

      const array = data24h.data.data.coins;
      const array7d = data7d.data.data.coins;
      const array3h = data3h.data.data.coins;
      const array30d = data30d.data.data.coins;
      const newValue = array7d.map((eachData, index) => ({
        ...array[index],
        change7d: eachData.change, change3h : array3h[index].change,change30d : array30d[index].change
      }));
      setSearched(newValue);
      setCryptoData(newValue);
      
      
      
    } catch (error) {
      console.error(error);
    }

   


    
  }
  useEffect(() =>{
    getCryptoData();
  },[limit,searchVal,orderBy,order])


  
  
  
  return (
    <CryptoContext.Provider value = {{cryptoData,searched,searchVal,setSearchVal,limit,setLimit,orderBy,setOrderBy,order,setOrder}}>
      {children}
    </CryptoContext.Provider>
  )
}