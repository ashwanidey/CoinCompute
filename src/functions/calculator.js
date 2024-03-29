
const calculateQuantity = (amt,lev,bp) => {
  var quantity = (amt* lev)/bp;
  if(Number.isFinite(quantity)){
      return Number(quantity).toFixed(2);
  }else{
      return "0.00";
  }
}

const calculateProfit = (amt,lev,bp,isLong,sp) =>{
  var quantity = (amt* lev)/bp;
  if(!isLong){
      var p = (bp- sp) * quantity.toFixed(2);
      if(Number.isFinite(p)){
          
          return p.toFixed(2);
      }else{
          return "0.00";
      }
      
  }
  else {
      var p = (sp - bp) * quantity.toFixed(2);
      if(Number.isFinite(p)){
          return p.toFixed(2);
      }else{
          return "0.00";
      }
  }
}

const calculateMargin=(amt,lev,bp)=>{
  var quantity = (amt* lev)/bp;
  const totalValueOfTrade = bp* quantity.toFixed(2);
  const initialMargin = totalValueOfTrade / lev;
  if(!Number.isNaN(initialMargin)){
      
      return Number(initialMargin).toFixed(2);
  }else{
      return "0.00";
  }
}

const calculateRoe = (amt,lev,bp,isLong,sp) =>{
  var ROE = calculateProfit(amt,lev,bp,isLong,sp)/calculateMargin(amt,lev,bp) *100;
  if(!Number.isNaN(ROE)){
      return Number(ROE).toFixed(1);
  }
  else{
      return "-";
  }  
}

const calculateLiquidationPrice = (entryPrice,lev,cost,isLong)=>{
    let liqPrice; 
    if(isLong)
    liqPrice= (cost-entryPrice)/lev + entryPrice;
    else liqPrice = -((cost-entryPrice)/lev - entryPrice);
    if(!Number.isNaN(liqPrice)) return Number(liqPrice);
    else return "-";
}

const calculateTargetPrice = (ep,roe,lev,isLong) => {
    let targetPrice;
    if(isLong){
        targetPrice = ep + ((roe/100)/lev)*ep;
    }
    else{
        targetPrice = ep - ((roe/100)/lev)*ep;
    }
    if(!Number.isNaN(targetPrice)) return Number(targetPrice).toFixed(2);
    else return '-';
}

const calculateAmount = (lev,balance)=>{
    var amt = lev * balance;
    if(!Number.isNaN(amt))
    return lev * balance;
    else return 0;
}

const calculateMaxOpen = (amt,lev,bp) => {
    var quantity = amt/bp;
    if(Number.isFinite(quantity)){
        return Number(quantity).toFixed(3);
    }else{
        return "0.00";
    }
}

const calculateOpenPRice = (Values) => {
    let ans = 0;
    let units = 0;
    for(let i = 0;i<Values.length;i++){
        ans += Values[i][0] * Values[i][1];
        units += Values[i][1];
    }
    
    
    ans /= units;

    if(Number.isFinite(ans)){
        return Number(ans).toFixed(2);
    }else{
        return "0";
    }
}

export {calculateQuantity,calculateProfit,calculateMargin,calculateRoe,calculateLiquidationPrice,calculateTargetPrice,calculateAmount,calculateMaxOpen,calculateOpenPRice};


