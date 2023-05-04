import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../../Pages/MainPage/MainPage';
import NotfoundPage from '../../Pages/NotfoundPage/NotfoundPage';
import CartPage from '../../Pages/CartPage/CartPage';
import Order from '../../Pages/Order/Order';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotfoundPage />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  </div>
);

export default App;
