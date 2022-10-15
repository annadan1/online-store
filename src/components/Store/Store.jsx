import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from './Store.module.scss';
import Content from '../Content/Content';
import { fetchCurrentGoods, fetchAllGoods } from '../../slices/goodsSlices.js';

const Store = () => {
  const { currentGoods } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
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
      <Content goods={currentGoods} />
    </div>
  );
};

export default Store;
