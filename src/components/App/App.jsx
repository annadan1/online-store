import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Store from '../Store/Store';
import NotfoundPage from '../../Pages/NotfoundPage/NotfoundPage';
import CartPage from '../../Pages/CartPage/CartPage';
import Order from '../../Pages/Order/Order';
import useSearch from '../../hooks/useSearchParamsContext';

const App = () => {
  const dispatch = useDispatch();

  const { getParams, updateParams } = useSearch();
  const params = getParams();

  useEffect(() => {
    updateParams(params, {});
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotfoundPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
