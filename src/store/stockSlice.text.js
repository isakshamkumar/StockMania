import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchStockData, stocksSlice } from './stockSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Async Redux Action', () => {
  it('fetchStockData should dispatch the correct actions on successful API call', async () => {
    const store = mockStore({ stock: { data: [], status: 'idle', error: null } });

    await store.dispatch(fetchStockData());

    const actions = store.getActions();
    const expectedActions = [
      { type: fetchStockData.pending.type },
      { type: fetchStockData.fulfilled.type, payload: []},
    ];

    expect(actions).toEqual(expectedActions);
  });

  it('fetchStockData should dispatch the correct actions on API call failure', async () => {
    const store = mockStore({ stock: { data: [], status: 'idle', error: null } });

    // Mock the fetchStockData to throw an error
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.reject('API Error'));

    await store.dispatch(fetchStockData());

    const actions = store.getActions();
    const expectedActions = [
      { type: fetchStockData.pending.type },
      { type: fetchStockData.rejected.type, error: 'API Error' },
    ];

    expect(actions).toEqual(expectedActions);
  });
});
