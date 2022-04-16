import './App.css';
import {useEffect, useState} from "react";
import Axios from "axios";
import Coin from './components/Coin';

function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("")


  useEffect(() =>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&currency=EUR")
    .then((res) => {
      setListOfCoins(res.data.coins)
    })
  },[])
  
  const filteredCoins = listOfCoins.filter((coin)=> {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (

    <div className="App">
      <div className="crypto-header">
        <input type="text" placeholder="BTC..." onChange={(event) => {setSearchWord(event.target.value)}}></input>
      </div>

      <div className="crypto-display">{filteredCoins.map((coin)=> {

        return <Coin 
        name={coin.name} 
        icon={coin.icon} 
        price={coin.price} 
        symbol={coin.symbol}/>

      })}</div>
    </div>
  );
}

export default App;
