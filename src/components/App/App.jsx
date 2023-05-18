import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainPage from '../../Pages/MainPage/MainPage';
import NotfoundPage from '../../Pages/NotfoundPage/NotfoundPage';
import CartPage from '../../Pages/CartPage/CartPage';
import OrderPage from '../../Pages/OrderPage/OrderPage';
import { actions } from '../../slices/cartSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    dispatch(actions.addItems(cartItems));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotfoundPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
};

export default App;
