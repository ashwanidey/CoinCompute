import React , {useContext} from 'react'
import { CryptoContext } from '../../../context/CryptoContext';
import millify from 'millify';


const row = {
  color: "#002358",
  borderColor: "#cee1ff",
  fontSize: "1.4rem",
 
}

const thead = {
  fontWeight: "400",
  fontSize: "1.2rem",
  textAlign: "left",
  padding: "16px 10px 18px 37px",
}

const tdata = {
  
  fontSize: "1.2rem",
  padding: "16px 37px 18px 10px",
  fontWeight: "700",
  textAlign: "right",
  whiteSpace: "nowrap",
}

export const Supply = () => {
  const {setCoinId,coinData,loadingCoin} = useContext(CryptoContext);
  // console.log(coinData);
  // console.log(coinData.supply.max)
  return (
    <div className='color-[#002358] lg:pr-[32px]'>
      <h2 class="text-[2.4rem] font-[700]"> Supply information </h2>
      <p className='color-[#264d89] leading-[1.7] '>View the total and circulating supply of {coinData.name}, including details on how the supplies are calculated.</p>

      <div className='mt-[35px] rounded-[10px] bg-[#f1f6ff]' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        
        <table className='w-full ' >
          <tbody>
            <tr style={row}>
              <th style={thead}>Circulating supply</th>
              <td style={tdata}>{millify(coinData.supply.circulating,{precision : 2})} {coinData.symbol}</td>
            </tr>
            <tr style={row}>
              <th style={thead}>Total supply</th>
              <td style={tdata}>{millify(coinData.supply.total,{precision : 2})} {coinData.symbol}</td>
            </tr>
            <tr style={row}>
              <th style={thead}>Max supply</th>
              <td style={tdata}>{coinData.supply.max !== null ? millify(coinData.supply.max,{precision : 2}) + coinData.symbol: "Data Not Available"} </td>
            </tr>
            <tr style={row}>
              <th style={thead}>Issuance blockchain</th>
              <td style={tdata}>{millify(coinData.name,{precision : 2})}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
