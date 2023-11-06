import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Banner from './yourPathToBannerComponent';

const mockStore = configureStore([]);

describe('Banner Component', () => {
  it('renders Banner component with loading state', () => {
    const store = mockStore({ stock: { data: [], status: 'loading', error: null } });

    render(
      <Provider store={store}>
        <Banner />
      </Provider>
    );

    const loadingElement = screen.getByText(/Loading/i);
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders Banner component with error state', () => {
    const store = mockStore({ stock: { data: [], status: 'failed', error: 'API Error' } });

    render(
      <Provider store={store}>
        <Banner />
      </Provider>
    );

    const errorElement = screen.getByText(/API Error/i);
    expect(errorElement).toBeInTheDocument();
  });

  it('renders Banner component with succeeded state', () => {
    const store = mockStore({
      stock: {
        data: [{ meta: { symbol: 'AAPL' }, values: [{ close: 100, high: 120, open: 90, low: 80, volume: 1000, datetime: '2023-01-01' }] }],
        status: 'succeeded',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Banner />
      </Provider>
    );

    const stockSymbolElement = screen.getByText(/AAPL/i);
    expect(stockSymbolElement).toBeInTheDocument();
  });
});
