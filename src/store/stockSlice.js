import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stocksApi } from '../config/api';
import { options } from '../config/api';

const stockTickers = ['AAPL', 'MSFT', 'TSLA', 'AMZN', 'META'];



export const fetchStockData = createAsyncThunk('stocks/fetchStockData', async () => {
  try {
    const response = await Promise.all(
      stockTickers.map(async (ticker) => {
        const api=stocksApi(ticker)
        const apiResponse = await fetch(
          api,
          options
        );

        if (!apiResponse.ok) {
          throw new Error(`Error fetching data for ${ticker}`);
        }
        
        const data = await apiResponse.json();

        return data;
      })
    );
    return response;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
});


export const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // console.log(action);
        state.data = action.payload;
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const stockActions = stocksSlice.actions;
export default stocksSlice.reducer;
