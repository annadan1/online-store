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
    addItem: (state, { payload }) => {
      const findItem = state.items.find((item) => item.id === payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
      state.totalCount += 1;
      state.totalPrice += payload.price;
    },
    removeItem: (state, { payload }) => {
      const findItem = state.items.find((item) => item.id === payload.id);
      state.items = state.items.filter(({ id }) => id !== payload.id);
      state.totalCount -= findItem.count;
      state.totalPrice -= payload.price * findItem.count;
    },
    removeItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
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
    },
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
