import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [idRemove, setIdRemove] = useState('');

  useEffect(() => {
    const STORED_FAVORITES = JSON.parse(localStorage.getItem('Favorites'));
    if (STORED_FAVORITES) {
      setFavorites(STORED_FAVORITES);
    }
  }, []);

  const HANDLE_REMOVE = (id) => {
    setIdRemove(id);
    const CONFIRM = window.confirm('Are you sure you want to remove this Crypto from your favorites?');
    if (CONFIRM) {
      const NEW_FAVORITES = favorites.filter((favorite) => favorite.id !== id);
      localStorage.setItem('Favorites', JSON.stringify(NEW_FAVORITES));
      setFavorites(NEW_FAVORITES);
    }
  };

  return (
    <div className="favorites-container">
        <p><Link to="/" className="link-back">Back</Link></p>
      <h1 className="favorites-header">Favorites</h1>
      {favorites.length === 0 ? (
        <p>Currently, there are no Cryptos in your favorite list</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((crypto, index) => (
            <li key={index}>
              <h2>{crypto.name}</h2>
              <p>Rank: {crypto.rank}</p>
              <p>Price: {crypto.priceUsd}</p>
              <p>Market Cap: {crypto.marketCapUsd}</p>
              <p>Change: {crypto.changePercent24Hr}</p>
              <button className="button-remove" onClick={() => HANDLE_REMOVE(crypto.id)}>Remove from favorites</button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Favorites;