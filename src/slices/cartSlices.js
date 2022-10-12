import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  totalPrice: 0,
  goods: [],
};

const cartSlice = createSlice({
  name: 'goodsSlice',
  initialState,
  reducers: {
    addGoods: (state, { payload }) => {
      state.goods.push(payload);
      state.totalCount += 1;
      state.totalPrice += payload.price;
    },
    removeGoods: (state, { payload }) => {
      state.goods = state.goods.filter(({ id }) => id !== payload.id);
      state.totalCount -= 1;
      state.totalPrice -= payload.price;
    },
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
