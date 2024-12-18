import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios.get('https://api.coincap.io/v2/assets')
      .then(response => {
        setCrypto(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
        <h1>Best Cryptos of the market right now</h1>
        <p>Left click on your preferred Crypto to display its details</p>
        <p><Link to="/favorites" className="link-favorites">Display your favorites</Link></p>
        <div>
            <ul>
                {crypto.map(eachCrypto => (
                <li key={eachCrypto.id}>
                    <Link to={`/coin/${eachCrypto.id}`}>
                        {eachCrypto.name}
                    </Link>
                </li>))}
            </ul>
        </div>
    </>
  );
};

export default Home;