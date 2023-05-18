import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes/index.js';

export const fetchCurrentGoods = createAsyncThunk(
  'goods/fetchCurrentGoods',
  async (params) => {
    const { data } = await axios.get(routes.getGoodsPath(), { params });
    return data;
  },
);

export const fetchAllGoods = createAsyncThunk(
  'goods/fetchAllGoods',
  async (params) => {
    const { data } = await axios.get(routes.getGoodsPath(), { params });
    return data;
  },
);

const initialState = {
  allGoods: [],
  currentGoods: [],
};

const goodsSlice = createSlice({
  name: 'goodsSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentGoods.fulfilled, (state, { payload }) => {
        state.currentGoods = payload;
      })
      .addCase(fetchAllGoods.fulfilled, (state, { payload }) => {
        state.allGoods = payload;
      });
  },
});

export const { actions } = goodsSlice;
export default goodsSlice.reducer;
