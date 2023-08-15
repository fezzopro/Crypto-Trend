import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
import Coin from '../Coin/Coin';
import './home.css';

export const CoinsList = ({ coins }) => {
  const coinsList = coins.map((coin) => <Coin coin={coin} key={Math.random()} />);
  return (
    <ul className="crypto-list">
      {coinsList}
    </ul>
  );
};
const Home = () => {
  const {
    cryptos, stats, isLoading, error,
  } = useSelector((state) => state.crypto);

  const [searchCoin, setSearchCoin] = useState('');
  const coinSearch = cryptos.filter(
    (el) => {
      if (searchCoin.length > 0) {
        return el.name.toLowerCase().includes(searchCoin.toLowerCase());
      }
      return el;
    },
  );

  return (

    <div className="content">
      {error !== '' ? (<div className="error"><span>{error}</span></div>) // eslint-disable-line
        : isLoading ? (<div className="loading"><span /></div>)
          : (
            <div>
              <div className="all-stats">ALL STATS</div>
              <Stats stats={stats} />
              <div className="search-form">
                <input
                  className="search-input"
                  type="search"
                  name="search"
                  onChange={(e) => setSearchCoin(e.target.value)}
                  id="search"
                  placeholder="search Crypto"
                  autoComplete="off"
                />
              </div>
              <CoinsList coins={coinSearch} />
            </div>
          )}
    </div>
  );
};

CoinsList.propTypes = {
  coins: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Home;
