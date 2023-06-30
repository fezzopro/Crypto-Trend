import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createMockStore from 'redux-mock-store';
import { CoinsList } from '../Home/Home';

describe('Home component suit cases', () => {
  test('Should render home component', () => {
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
    const container = render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinsList coins={mockCoin} />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
