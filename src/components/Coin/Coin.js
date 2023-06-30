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
      <Link to="details" state={uuid}>
        <div className="coin">
          <span style={style}>
            <span>{`Name: ${name}(${symbol})`}</span>
            <span>{`Market Cap: ${Number(marketCap).toLocaleString()}$`}</span>
            <span>{`Price: ${Number(price).toLocaleString()}$`}</span>
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
