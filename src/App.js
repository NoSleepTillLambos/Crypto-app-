import './App.css';
import {useEffect} from "react";
import Axios from "axios";


function App() {

    useEffect(() =>{
      Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR")
      .then((res) => {
        console.log(res.data)
      })
    },[])

  return (

    <div className="App">
      <div className="crypto-header"></div>
      <div className="crypto-display"></div>
    </div>
  );
}

export default App;
