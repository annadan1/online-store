import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import Content from './Content/Content';
import { fetchCurrentGoods, fetchAllGoods } from '../../slices/goodsSlices.js';
import { wrapper } from './App.module.scss';
import useSortMethods from '../../hooks/useSortMethods';

const App = () => {
  const dispatch = useDispatch();
  const { currentGoods, currentPage, limit } = useSelector((state) => state.goods);
  const { activeMethod } = useSortMethods();

  useEffect(() => {
    const request = { path: 'all', params: { p: currentPage, l: limit, ...activeMethod.method } };
    dispatch(fetchCurrentGoods(request));
    dispatch(fetchAllGoods('all'));
  }, []);

  return (
    <div className={wrapper}>
      <Header />
      <Content goods={currentGoods} />
    </div>
  );
};

export default App;
