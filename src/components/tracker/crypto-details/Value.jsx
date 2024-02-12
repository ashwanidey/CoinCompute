import React , {useContext} from 'react'
import { CryptoContext } from '../../../context/CryptoContext';
import millify from 'millify';


const statsRow = {
  display: "grid",
  borderBottom: "1px solid #173e7b",
  padding: "16px 0 18px",
  gridTemplateColumns: "auto auto",
  gridTemplateRows: "auto auto",
  alignItems: "center",
  color: "#002358",
}

const statsLabel = {
  color: "#002358",
  fontSize: "1.2rem",
    textAlign: "left",
    fontWeight: "400",
    marginRight: "10px"
}

const statsValue = {
  fontSize: "1.2rem",
 
    
    fontWeight: "700",
    textAlign: "right",
    whiteSpace: "nowrap",
}

export const Value = () => {
  const {setCoinId,coinData,loadingCoin} = useContext(CryptoContext);

  return (
    <div className=''>
      <div className='flex mt-[3rem] lg:mt-0 mb-[13px] flex-col'>
        <h2 className='color-[#002358] text-[2.4rem] font-[700]'>Statistics</h2>
        <p className='text-[1rem] leading-[1.6]'>An overview showing the statistics of {coinData.name}, such as the base and quote currency, the rank, and trading volume.</p>
      </div>

      <table className='w-full'>
        <tr style={statsRow}>
          
          <td style={statsLabel}>Price to USD</td>
          <td style={statsValue}>${millify(coinData.price)}</td>
        </tr>

        <tr style={statsRow}>
        
          <td style={statsLabel}>Price to BTC</td>
          <td style={statsValue}>{millify(coinData.btcPrice,{precision:4})}</td>
        </tr>

        <tr style={statsRow}>
       
          <td style={statsLabel}>Coin rank</td>
          <td style={statsValue}>{millify(coinData.rank)}</td>
        </tr>

        <tr style={statsRow}>
        
          <td style={statsLabel}>24h volume</td>
          <td style={statsValue}>${millify(coinData['24hVolume'],{precision:2})}</td>
        </tr>

        <tr style={statsRow}>
        
          <td style={statsLabel}>Market cap</td>
          <td style={statsValue}>${millify(coinData.marketCap,{precision:2})}</td>
        </tr>

        <tr style={statsRow}>
        
          <td style={statsLabel}>
Volume / Market cap</td>
          <td style={statsValue}>{millify(coinData['24hVolume']/coinData.marketCap,{precision:2})}</td>
        </tr>

        <tr style={statsRow}>
        
          <td style={statsLabel}>All-time high</td>
          <td style={statsValue}>${millify(coinData.allTimeHigh.price,{precision:2})}</td>
        </tr>

        <tr style={statsRow}>
        
          <td style={statsLabel}>Fully diluted market cap</td>
          <td style={statsValue}>${millify(coinData.fullyDilutedMarketCap,{precision:2})}</td>
        </tr>
        
      </table>

    </div>
  )
}
