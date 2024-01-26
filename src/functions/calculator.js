
const calculateQuantity = (amt,lev,bp) => {
  var quantity = (amt* lev)/bp;
  if(Number.isFinite(quantity)){
      return Number(quantity).toFixed(2);
  }else{
      return 0;
  }
}

const calculateProfit = (amt,lev,bp,isLong,sp) =>{
  var quantity = (amt* lev)/bp;
  if(!isLong){
      var p = (bp- sp) * quantity.toFixed(2);
      if(Number.isFinite(p)){
          
          return p;
      }else{
          return "0.00";
      }
      
  }
  else {
      var p = (sp - bp) * quantity.toFixed(2);
      if(Number.isFinite(p)){
          return p;
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
      
      return Number(initialMargin);
  }else{
      return "-";
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

export {calculateQuantity,calculateProfit,calculateMargin,calculateRoe};


