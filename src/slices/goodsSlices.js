import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes/index.js';

export const fetchCurrentGoods = createAsyncThunk(
  'goods/fetchCurrentGoods',
  async (request) => {
    const { params, path } = request;
    const { data } = await axios.get(routes.getGoodsPath(path), { params });

    return data;
  },
);

export const fetchAllGoods = createAsyncThunk(
  'goods/fetchAllGoods',
  async (path) => {
    const { data } = await axios.get(routes.getGoodsPath(path), {});
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
