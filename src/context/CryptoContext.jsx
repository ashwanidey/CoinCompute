import { createContext,useEffect,useState,useMemo } from "react";
import { CoinList } from "../config/api";


import axios from "axios";

export const CryptoContext = createContext({});


export const CryptoProvider = ({children}) => {
  const [cryptoData, setCryptoData] = useState([]);
  // const [cryptoData, setCryptoData] = useState([{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400","current_price":47837,"market_cap":938989404863,"market_cap_rank":1,"fully_diluted_valuation":1004870637925,"total_volume":39880465272,"high_24h":48018,"low_24h":45169,"price_change_24h":2667.49,"price_change_percentage_24h":5.90557,"market_cap_change_24h":52514572072,"market_cap_change_percentage_24h":5.92398,"circulating_supply":19623200.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-30.67232,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":70491.12494,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2024-02-09T18:42:43.120Z","price_change_percentage_1h_in_currency":0.6710498208319049,"price_change_percentage_24h_in_currency":5.905567659134266,"price_change_percentage_7d_in_currency":11.300810261072348},{"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628","current_price":2513.24,"market_cap":302183666130,"market_cap_rank":2,"fully_diluted_valuation":302183666130,"total_volume":15249767647,"high_24h":2522.34,"low_24h":2419.29,"price_change_24h":84.16,"price_change_percentage_24h":3.46449,"market_cap_change_24h":10064677756,"market_cap_change_percentage_24h":3.4454,"circulating_supply":120176767.965254,"total_supply":120176767.965254,"max_supply":null,"ath":4878.26,"ath_change_percentage":-48.43229,"ath_date":"2021-11-10T14:24:19.604Z","atl":0.432979,"atl_change_percentage":580899.99205,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":69.21672573878774,"currency":"btc","percentage":6921.672573878775},"last_updated":"2024-02-09T18:42:44.879Z","price_change_percentage_1h_in_currency":0.6730955876593278,"price_change_percentage_24h_in_currency":3.464485114123967,"price_change_percentage_7d_in_currency":9.40023962864235},{"id":"tether","symbol":"usdt","name":"Tether","image":"https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661","current_price":0.99968,"market_cap":96249245048,"market_cap_rank":3,"fully_diluted_valuation":96249245048,"total_volume":43097131363,"high_24h":1.004,"low_24h":0.996926,"price_change_24h":-1.3598074124488e-05,"price_change_percentage_24h":-0.00136,"market_cap_change_24h":54302916,"market_cap_change_percentage_24h":0.05645,"circulating_supply":96206255178.3594,"total_supply":96206255178.3594,"max_supply":null,"ath":1.32,"ath_change_percentage":-24.45626,"ath_date":"2018-07-24T00:00:00.000Z","atl":0.572521,"atl_change_percentage":74.58148,"atl_date":"2015-03-02T00:00:00.000Z","roi":null,"last_updated":"2024-02-09T18:40:19.135Z","price_change_percentage_1h_in_currency":-0.03410411144295528,"price_change_percentage_24h_in_currency":-0.0013602245958486275,"price_change_percentage_7d_in_currency":0.04320122208339042},{"id":"binancecoin","symbol":"bnb","name":"BNB","image":"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970","current_price":323.97,"market_cap":49847717912,"market_cap_rank":4,"fully_diluted_valuation":49847717912,"total_volume":1193715607,"high_24h":326.02,"low_24h":317.08,"price_change_24h":6.88,"price_change_percentage_24h":2.171,"market_cap_change_24h":1029167039,"market_cap_change_percentage_24h":2.10815,"circulating_supply":153856150.0,"total_supply":153856150.0,"max_supply":200000000.0,"ath":686.31,"ath_change_percentage":-52.79529,"ath_date":"2021-05-10T07:24:17.097Z","atl":0.0398177,"atl_change_percentage":813530.81387,"atl_date":"2017-10-19T00:00:00.000Z","roi":null,"last_updated":"2024-02-09T18:42:39.242Z","price_change_percentage_1h_in_currency":0.08467277321674505,"price_change_percentage_24h_in_currency":2.171000820280465,"price_change_percentage_7d_in_currency":7.52563511677313},{"id":"solana","symbol":"sol","name":"Solana","image":"https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756","current_price":106.29,"market_cap":46475257737,"market_cap_rank":5,"fully_diluted_valuation":60538090060,"total_volume":2587590311,"high_24h":106.66,"low_24h":102.28,"price_change_24h":3.64,"price_change_percentage_24h":3.54571,"market_cap_change_24h":1599334489,"market_cap_change_percentage_24h":3.5639,"circulating_supply":436985006.833183,"total_supply":569211127.603176,"max_supply":null,"ath":259.96,"ath_change_percentage":-59.11206,"ath_date":"2021-11-06T21:54:35.825Z","atl":0.500801,"atl_change_percentage":21124.38679,"atl_date":"2020-05-11T19:35:23.449Z","roi":null,"last_updated":"2024-02-09T18:42:37.698Z","price_change_percentage_1h_in_currency":1.2167806707634894,"price_change_percentage_24h_in_currency":3.545705946432925,"price_change_percentage_7d_in_currency":6.998934307260077},{"id":"ripple","symbol":"xrp","name":"XRP","image":"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442","current_price":0.52538,"market_cap":28599523577,"market_cap_rank":6,"fully_diluted_valuation":52531363528,"total_volume":943036832,"high_24h":0.526392,"low_24h":0.51346,"price_change_24h":0.00851601,"price_change_percentage_24h":1.64763,"market_cap_change_24h":458352552,"market_cap_change_percentage_24h":1.62876,"circulating_supply":54436190886.0,"total_supply":99987935982.0,"max_supply":100000000000.0,"ath":3.4,"ath_change_percentage":-84.53776,"ath_date":"2018-01-07T00:00:00.000Z","atl":0.00268621,"atl_change_percentage":19462.03289,"atl_date":"2014-05-22T00:00:00.000Z","roi":null,"last_updated":"2024-02-09T18:42:44.172Z","price_change_percentage_1h_in_currency":0.8250038193434681,"price_change_percentage_24h_in_currency":1.647629531116769,"price_change_percentage_7d_in_currency":4.398180392137956},{"id":"usd-coin","symbol":"usdc","name":"USDC","image":"https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694","current_price":0.998084,"market_cap":27796995932,"market_cap_rank":7,"fully_diluted_valuation":25469437586,"total_volume":8138543276,"high_24h":1.004,"low_24h":0.994785,"price_change_24h":-0.002119938200630944,"price_change_percentage_24h":-0.21195,"market_cap_change_24h":187415300,"market_cap_change_percentage_24h":0.67881,"circulating_supply":27798467555.8291,"total_supply":25470785983.8999,"max_supply":null,"ath":1.17,"ath_change_percentage":-14.87919,"ath_date":"2019-05-08T00:40:28.300Z","atl":0.877647,"atl_change_percentage":13.73791,"atl_date":"2023-03-11T08:02:13.981Z","roi":null,"last_updated":"2024-02-09T18:42:43.252Z","price_change_percentage_1h_in_currency":-0.1761891781461258,"price_change_percentage_24h_in_currency":-0.2119505577813896,"price_change_percentage_7d_in_currency":-0.15061387187262235},{"id":"staked-ether","symbol":"steth","name":"Lido Staked Ether","image":"https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206","current_price":2518.76,"market_cap":24195213452,"market_cap_rank":8,"fully_diluted_valuation":24200204671,"total_volume":22638910,"high_24h":2525.29,"low_24h":2420.47,"price_change_24h":88.85,"price_change_percentage_24h":3.65645,"market_cap_change_24h":989299739,"market_cap_change_percentage_24h":4.26314,"circulating_supply":9601105.85355631,"total_supply":9603086.461075,"max_supply":null,"ath":4829.57,"ath_change_percentage":-47.87164,"ath_date":"2021-11-10T14:40:47.256Z","atl":482.9,"atl_change_percentage":421.34926,"atl_date":"2020-12-22T04:08:21.854Z","roi":null,"last_updated":"2024-02-09T18:42:32.401Z","price_change_percentage_1h_in_currency":0.8747458715920271,"price_change_percentage_24h_in_currency":3.656449622096569,"price_change_percentage_7d_in_currency":9.483651761966746},{"id":"cardano","symbol":"ada","name":"Cardano","image":"https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090","current_price":0.541899,"market_cap":19020897285,"market_cap_rank":9,"fully_diluted_valuation":24372596072,"total_volume":503378213,"high_24h":0.546652,"low_24h":0.526028,"price_change_24h":0.01558676,"price_change_percentage_24h":2.9615,"market_cap_change_24h":531620529,"market_cap_change_percentage_24h":2.87529,"circulating_supply":35118966206.8543,"total_supply":45000000000.0,"max_supply":45000000000.0,"ath":3.09,"ath_change_percentage":-82.45618,"ath_date":"2021-09-02T06:00:10.474Z","atl":0.01925275,"atl_change_percentage":2712.9077,"atl_date":"2020-03-13T02:22:55.044Z","roi":null,"last_updated":"2024-02-09T18:42:39.602Z","price_change_percentage_1h_in_currency":0.7006928700450736,"price_change_percentage_24h_in_currency":2.961501159468993,"price_change_percentage_7d_in_currency":5.427685797292507},{"id":"avalanche-2","symbol":"avax","name":"Avalanche","image":"https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369","current_price":37.96,"market_cap":13948599248,"market_cap_rank":10,"fully_diluted_valuation":16531061539,"total_volume":712456494,"high_24h":38.11,"low_24h":35.37,"price_change_24h":2.48,"price_change_percentage_24h":6.99546,"market_cap_change_24h":904503333,"market_cap_change_percentage_24h":6.9342,"circulating_supply":367464712.217057,"total_supply":435497619.733512,"max_supply":720000000.0,"ath":144.96,"ath_change_percentage":-73.71109,"ath_date":"2021-11-21T14:18:56.538Z","atl":2.8,"atl_change_percentage":1260.50874,"atl_date":"2020-12-31T13:15:21.540Z","roi":null,"last_updated":"2024-02-09T18:42:39.960Z","price_change_percentage_1h_in_currency":1.157534212999058,"price_change_percentage_24h_in_currency":6.995464752395256,"price_change_percentage_7d_in_currency":5.2137068933493}]);
  
  const [searched, setSearched] = useState([]);
  const [searchVal,setSearchVal] = useState("");
  
  const requestSearch = (searchVal) => {
    const filteredRows = cryptoData.filter((row) => {
      return row.name.toLowerCase().includes(searchVal.toLowerCase());
    });
    setSearched(filteredRows);
    
  };
  useEffect(() =>{
    requestSearch(searchVal);
  },[searchVal])

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

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
    setSearched(data);
        } catch (error) {
          console.log(error);
        }
  }
  useEffect(() =>{
    getCryptoData();
  },[])

  
  
  
  return (
    <CryptoContext.Provider value = {{cryptoData,searched,requestSearch,searchVal,setSearchVal}}>
      {children}
    </CryptoContext.Provider>
  )
}