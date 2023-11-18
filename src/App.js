import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ResultDisplay from './DisplayResult';
import CoinSelector from './CoinSelector';

async function getCoins() {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  return response.data;
}
async function getData(id) {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return response.data;
}


function App() {
  
  const [coins, setCoins] = useState([]);
  const [coin1, setCoin1] = useState('');
  const [coin2, setCoin2] = useState('');
  const [marketCap1, setMarketCap1] = useState(0);
  const [marketCap2, setMarketCap2] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [image1, setImage1] = useState('');
  const [isShown, setIsShown] = useState(false);


  useEffect(() => {
    async function fetchCoins() {
      const coinData = await getCoins();

      setCoins(coinData);
    }
    
    fetchCoins();
    
  }, []);

  

  function compareCoins() {
    
    async function fetchMarketCaps() {
      const DataCoin1 = await getData(coin1);
      const DataCoin2 = await getData(coin2);

      const marketCap1 = DataCoin1.market_data.market_cap.usd;
      const marketCap2 = DataCoin2.market_data.market_cap.usd;
      const price1 = DataCoin1.market_data.current_price.usd;
      const price2 = DataCoin2.market_data.current_price.usd;
      const name1 = DataCoin1.name;
      const name2 = DataCoin2.name;
      const image1= DataCoin1.image.thumb;
      
      setMarketCap1(marketCap1);
      setMarketCap2(marketCap2);
      setPrice1(price1);
      setPrice2(price2);
      setName1(name1);
      setName2(name2);
      setImage1(image1);
      setIsShown(true);
    }
    fetchMarketCaps();
  }

  return (
    <div className="App">
      <h1 className="title">Comparer Cryptomonnaie</h1>
      <div className="inputs">
        <CoinSelector coin={coin1} setCoin={setCoin1} coins={coins} />
        <CoinSelector coin={coin2} setCoin={setCoin2} coins={coins} />
      </div>
      <button className="compare-button" onClick={() =>(compareCoins())}>Compare</button>
      {isShown && ( <ResultDisplay
        marketCap1={marketCap1}
        marketCap2={marketCap2}
        price1={price1}
        price2={price2}
        name1={name1}
        name2={name2}
        image1={image1}
      />)}
    <footer className="footer">Created by: <a href="https://github.com/omarharzallah">Omar Harzallah</a></footer> 
    </div>
  );} 

  export default App;
