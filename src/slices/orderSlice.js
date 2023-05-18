import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  mail: '',
  number: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addAddress: (state, { payload }) => {
      state.address = payload;
    },
    addMail: (state, { payload }) => {
      state.mail = payload;
    },
    addNumber: (state, { payload }) => {
      state.number = payload;
    },
  },
});

export const { actions } = orderSlice;
export default orderSlice.reducer;
