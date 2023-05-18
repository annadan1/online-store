import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice.js';
import cartReducer from './cartSlice.js';

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
  },
});

export default store;
