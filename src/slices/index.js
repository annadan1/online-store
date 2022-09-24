import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlices.js';
import cartReducer from './cartSlices.js';

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
  },
});

export default store;
