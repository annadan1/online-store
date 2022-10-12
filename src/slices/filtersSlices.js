import { createSlice } from '@reduxjs/toolkit';
import { fetchAllGoods } from './goodsSlices.js';

const initialState = {
  page: 1,
  limit: 6,
  filter: 'all',
  color: null,
  size: null,
  totalPage: 0,
  method: { name: 'по популярности', method: { sortBy: 'rating', order: 'desc' } },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    changeFilter: (state, { payload }) => {
      state.page = payload;
    },
    changeColor: (state, { payload }) => {
      state.color = payload;
    },
    changeSize: (state, { payload }) => {
      state.size = payload;
    },
    changeMethod: (state, { payload }) => {
      state.method = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGoods.fulfilled, (state, { payload }) => {
        state.totalPage = Math.ceil(payload.length / state.limit);
      });
  },
});

export const { actions } = filtersSlice;
export default filtersSlice.reducer;
