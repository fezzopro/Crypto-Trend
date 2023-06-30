import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createMockStore from 'redux-mock-store';
import Home, { CoinsList } from '../Home/Home';

describe('Home component suit cases', () => {
  const initialState = {
    crypto: {
      cryptos: [],
    },
    stats: {
      totalCoins: 0,
      total24hVolume: 0,
      totalExchanges: 0,
      totalMarkets: 0,
      totalMarketCap: 0,
      total: 0,
    },
    title: 'Crypto Trend',
    isLoading: true,
    error: 'Error',
    message: '',
    active: [],
  };
  const mockCoin = [{
    uuid: 111, symbol: '', name: 'BTC', iconUrl: '', marketCap: 100, price: 1000,
  }];
  const mockStore = createMockStore();
  const store = mockStore(initialState);
  test('Should render CoinList component', () => {
    const container = render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinsList coins={mockCoin} />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
  test('Should render home component', () => {
    initialState.stats = {};
    const container = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
