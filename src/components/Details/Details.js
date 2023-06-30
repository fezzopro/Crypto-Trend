import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { setTitle, setActiveCoin } from '../../redux/crypto/cryptoSlice';
import './details.css';

const Details = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const activeCrypto = useSelector(({ crypto }) => crypto.cryptos.find((el) => el.uuid === state));
  const {
    uuid, symbol, name, iconUrl, marketCap, price,
    listedAt, change, rank, lowVolume, coinrankingUrl, btcPrice,
  } = activeCrypto;
  const date = new Date(listedAt * 1000);

  useEffect(() => {
    dispatch(setTitle(`${symbol} Treds`));
    dispatch(setActiveCoin(state));
  });

  return (
    <div key={uuid}>
      <div className="all-stats">{name.toUpperCase()}</div>
      <div className="top-details">
        <div className="details-crypto-icon">
          <img src={iconUrl} alt="Crypto" />
        </div>
        <div className="crypto-intro">
          <span>
            <span>Crypto Currency: </span>
            <span>{name}</span>
          </span>
          <span>
            <span>Price In BTC: </span>
            <span>{Number(btcPrice).toLocaleString(undefined, 2)}</span>
          </span>
          <span>
            <Link to={coinrankingUrl} target="_blank">External Resource</Link>
          </span>
        </div>
      </div>
      <div className="crypto-analytics">
        <div>
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div>
          <span>Volume in 24h:</span>
          <span>{`${Number(activeCrypto['24hVolume']).toLocaleString(undefined, 2)} $`}</span>
        </div>
        <div>
          <span>
            Market Capital:
          </span>
          <span>{`${Number(marketCap).toLocaleString(undefined, 2)} $`}</span>
        </div>
        <div>
          <span>Price in USD: </span>
          <span>{`${Number(price).toLocaleString(undefined, 2)} $`}</span>
        </div>
        <div>
          <span>Listed At:</span>
          <span>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</span>
        </div>
        <div>
          <span>Change in 24h: </span>
          <span>{change}</span>
        </div>
        <div>
          <span>Rank: </span>
          <span>{rank}</span>
        </div>
        <div>
          <span>Low Volume: </span>
          <span>{lowVolume}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
