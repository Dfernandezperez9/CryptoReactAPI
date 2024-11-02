import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Coin.css';

const Coin = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState({});

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets/${id}`)
      .then(response => {
        setCrypto(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const HANDLE_SAVE = () => {
    const FAVORITES = JSON.parse(localStorage.getItem('Favorites')) || [];
    FAVORITES.push(crypto);
    localStorage.setItem('Favorites', JSON.stringify(FAVORITES));
    alert('You succesfully saved this Crypto as favorite');
  };

  return (
    <>
        <p><Link to="/" className="link-back">Back</Link></p>
        <div className="coin-container">
            <h1 className="coin-header">{crypto.name}</h1>
            <div className="coin-info">
                <p>Rank: {crypto.rank}</p>
                <p>Price: {crypto.priceUsd}</p>
                <p>Market Cap: {crypto.marketCapUsd}</p>
                <p>Change: {crypto.changePercent24Hr}</p>
            </div>
            <button className="button-favorite" onClick={HANDLE_SAVE}>Save to Favorites</button>
        </div>
    </>
  );
};

export default Coin;