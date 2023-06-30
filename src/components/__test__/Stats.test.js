import { render, screen } from '@testing-library/react';
import Stats from '../Stats/Stats';

describe('Stats test suit', () => {
  const mockStats = {
    totalCoins: 600,
    total24hVolume: 400000,
    totalExchanges: 100,
    totalMarkets: 123,
    totalMarketCap: 123787638262,
    total: 30004000,
  };
  test('Should render stats component', () => {
    const container = render(
      <Stats stats={mockStats} />,
    );
    expect(container).toMatchSnapshot();
  });
  test('Should render stats component with total of 30004000', () => {
    render(
      <Stats stats={mockStats} />,
    );
    expect(screen.getByText(/30,004,000/i)).toBeInTheDocument();
  });
  test('Should render stats component with total coins of 600', () => {
    render(
      <Stats stats={mockStats} />,
    );
    expect(screen.getByText(/600/i)).toBeInTheDocument();
  });
  test('Should render stats component with total coins of 400,000$', () => {
    render(
      <Stats stats={mockStats} />,
    );
    expect(screen.getByText(/400,000\$/i)).toBeInTheDocument();
  });
  test('Should render stats component with total exchanges of 100', () => {
    render(
      <Stats stats={mockStats} />,
    );
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
  test('Should render stats component with total markets of 123', () => {
    render(
      <Stats stats={mockStats} />,
    );
    expect(screen.getByText(/123$/i)).toBeInTheDocument();
  });
  test('Should render stats component total market cap of 123,787,638,262$', () => {
    render(
      <Stats stats={mockStats} />,
    );
    expect(screen.getByText(/123,787,638,262\$/i)).toBeInTheDocument();
  });
});
