import React from 'react';

const CoinSelector = ({coin, setCoin, coins}) => (
  <label>
    Coin  :
    <select className="coin-select" value={coin} onChange={e => setCoin(e.target.value)}>
      <option value="">Select a coin</option>
      {coins.map(coin => (
        <option key={coin.id} value={coin.id}>
          {coin.rank}. {coin.name}
        </option>
      ))}
    </select>
  </label>
);

export default CoinSelector;
