import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Store from '../Store/Store';
import NotfoundPage from '../../Pages/NotfoundPage/NotfoundPage';
import CartPage from '../../Pages/CartPage/CartPage';
import Header from '../Header/Header';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  </div>

);

export default App;
