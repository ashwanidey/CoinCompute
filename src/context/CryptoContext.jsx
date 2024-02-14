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
  const [offset,setOffset] = useState(0);
  const [orderBy,setOrderBy] = useState("");
  const [order,setOrder] = useState("");

  const [loading,setLoading] = useState();

  const [coinId,setCoinId] = useState('');

  const [coinHistory,setCoinHistory] = useState([]);
  const [timePeriod,setTimePeriod] = useState('7d');

  const[totalCoin,setTotalCoin] = useState();

  const optionsHistory = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`,
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: timePeriod
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const getCoinHistory = async () => {
    
    
    try {
      const response = await axios.request(optionsHistory);
      setCoinHistory(response.data.data.history);
    } catch (error) {
      console.error(error);
    }
  }
  

  useEffect(() => {
    if(coinId !== '')
    getCoinHistory();
  },[timePeriod,coinId])
  
  
 


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
      offset: offset.toString(),
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
      offset: offset.toString(),
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
      offset: offset.toString(),
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
      offset: offset.toString(),
      search: searchVal,
      
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  

  const getCryptoData  = async () => {

    setLoading(false);

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
      setLoading(true);

      setTotalCoin(data24h.data.data.stats.total);
      
      
      
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    
  }
  useEffect(() =>{
    getCryptoData();
  },[limit,searchVal,orderBy,order,offset])

  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h'
    },
    headers: {
      'X-RapidAPI-Key': 'fef93e0117msh2c96991107f59b4p1fb309jsn5804230510a6',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const [coinData,setCoinData] = useState([]);
  const [loadingCoin,setLoadingCoin] = useState();

  const getCoinData = async () => {
    setLoadingCoin(false);
    try {
      const response = await axios.request(options);
      setCoinData(response.data.data.coin);
      setLoadingCoin(true);
    } catch (error) {
      setLoadingCoin(false);
      console.error(error);
    }
  }

  useEffect(() => {
    if(coinId != "")
    getCoinData()
  },[coinId])
  
  
  
  return (
    <CryptoContext.Provider value = {{cryptoData,searched,searchVal,setSearchVal,limit,setLimit,orderBy,setOrderBy,order,setOrder,loading,coinId,setCoinId,coinData,loadingCoin,coinHistory,timePeriod,setTimePeriod,offset,setOffset,totalCoin}}>
      {children}
    </CryptoContext.Provider>
  )
}