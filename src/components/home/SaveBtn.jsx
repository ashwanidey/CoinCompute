import { useContext } from "react";
import { StorageContext } from "../../context/StorageContext";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const SaveBtn = ({ID}) => {
  const {saveCoin,allCoins,removeCoin} = useContext(StorageContext);
  

  const handleClick = () => {
    saveCoin(ID);


    if(allCoins.includes(ID)){
      removeCoin(ID);
    }else{
      saveCoin(ID);
    }
  }

  return (
  <button className='w-[20px]' onClick= {() => handleClick()}>
     {
      !allCoins.includes(ID) ?  <FavoriteBorderOutlinedIcon sx={{fontSize : "large"}}/> : 
      <FavoriteIcon sx={{fontSize : "large"}}/>
     }             
  
  </button>
  )
}