import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlices.js';
import cartReducer from './cartSlices.js';
import filtersReducer from './filtersSlices';

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
    filters: filtersReducer,
  },
});

export default store;
