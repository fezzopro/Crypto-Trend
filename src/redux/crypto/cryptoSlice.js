import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../config/globals';

const initialState = {
  cryptos: [],
  stats: {},
  title: 'Crypto Trend',
  isLoading: true,
  error: '',
  message: '',
  active: [],
};

export const fetchCrypto = createAsyncThunk(('crypto/fetchCrypto'), () => (
  axios
    .get(API_URL)
    .then((response) => response.data.data)
));

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setActiveCoin: (state, { payload }) => {
      state.active = payload;
    },
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptos = action.payload.coins;
        state.stats = action.payload.stats;
      })
      .addCase(fetchCrypto.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setTitle, setActiveCoin } = cryptoSlice.actions;
export default cryptoSlice.reducer;
