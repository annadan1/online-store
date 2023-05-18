import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'goodsSlice',
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.totalCount = payload.totalCount;
      state.totalPrice = payload.totalPrice;
      state.items = payload.items;
    },
    addItem: (state, { payload }) => {
      const findItem = state.items.find((item) => item.id === payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
      state.totalCount += 1;
      state.totalPrice += payload.price;
      const json = JSON.stringify(state);
      localStorage.setItem('cart', json);
    },
    removeItem: (state, { payload }) => {
      const findItem = state.items.find((item) => item.id === payload.id);
      state.items = state.items.filter(({ id }) => id !== payload.id);
      state.totalCount -= findItem.count;
      state.totalPrice -= payload.price * findItem.count;
      const json = JSON.stringify(state);
      localStorage.setItem('cart', json);
    },
    removeItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      localStorage.removeItem('cart');
    },
    minusItem: (state, { payload }) => {
      const findItem = state.items.find((item) => item.id === payload.id);
      if (findItem.count === 1) {
        state.items = state.items.filter(({ id }) => id !== payload.id);
      } else {
        findItem.count -= 1;
      }
      state.totalCount -= 1;
      state.totalPrice -= payload.price;
      const json = JSON.stringify(state);
      localStorage.setItem('cart', json);
    },
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
