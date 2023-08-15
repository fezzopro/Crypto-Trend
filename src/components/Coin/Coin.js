import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './coin.css';

const Coin = ({ coin }) => {
  const {
    uuid, symbol, name, iconUrl, marketCap, price,
  } = coin;
  const style = {
    backgroundImage: `url(${iconUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    backgroundSize: '50px',
  };
  return (
    <li key={uuid}>
      <Link to={`details?coin=${uuid}`} state={uuid}>
        <div className="coin">
          <span style={style}>
            <span className="coin-info coin-name">
              <span>Name:</span>
              <span>{`${name}(${symbol})`}</span>
            </span>
            <span className="coin-info coin-market-cap">
              <span>Market Cap:</span>
              <span>{Number(marketCap).toLocaleString()}</span>
            </span>
            <span className="coin-info coin-price">
              <span>Price:</span>
              <span>{Number(price).toLocaleString()}</span>
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
};

Coin.propTypes = {
  coin: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Coin;
