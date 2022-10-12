import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import Content from './Content/Content';
import { fetchCurrentGoods, fetchAllGoods } from '../../slices/goodsSlices.js';
import { wrapper } from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { currentGoods } = useSelector((state) => state.goods);
  const {
    page, limit, filter, method,
  } = useSelector((state) => state.filters);

  useEffect(() => {
    const request = { path: filter, params: { p: page, l: limit, method } };
    dispatch(fetchCurrentGoods(request));
    dispatch(fetchAllGoods(filter));
  }, []);

  return (
    <div className={wrapper}>
      <Header />
      <Content goods={currentGoods} />
    </div>
  );
};

export default App;
