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
      findItem ? findItem.count + 1 : state.items.push({ ...payload, count: 1 });
      state.totalCount += 1;
      state.totalPrice += payload.price;
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload.id);
      state.totalCount -= 1;
      state.totalPrice -= payload.price;
    },
    removeItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    reduceItem: (state, { payload }) => {
      const findItem = state.items.find((item) => item.id === payload.id);
      findItem.count - 1;
      state.totalCount -= 1;
      state.totalPrice -= 1;
    },
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
