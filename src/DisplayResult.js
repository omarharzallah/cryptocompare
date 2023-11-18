import React from 'react';

function ResultDisplay({ marketCap1, marketCap2, price1, price2, name1, name2, image1 }) {
  return marketCap1 > marketCap2 ? (
    <>
      <p className="result-text1">{name1} {'>'} {name2} <br></br><div className='pas'>Pas de Potentiel</div></p>
      <p className="result-text">{name1}: Price: ${price1} ,Market Cap: ${marketCap1.toLocaleString()}</p>
      <p className="result-text">{name2}: Price: ${price2} ,Market Cap: ${marketCap2.toLocaleString()}</p>

    </>
  ) : (
    <>
      <p className="result-text">{name1} avec le market cap de {name2}</p>
      <p className="result-text1"><img src={image1}></img>   {((price1)*(marketCap2 / marketCap1)).toFixed(1)}$ <div className='Price'>({(marketCap2 / marketCap1).toFixed(1)}x)</div></p>
      <p className="result-text">Prix de {name1}: ${price1} </p>
      <p className="result-text">Prix de {name2}: ${price2} </p>
      
    </>
  );
}

export default ResultDisplay;
