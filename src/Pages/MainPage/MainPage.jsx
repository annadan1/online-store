import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { wrapper } from './MainPage.module.scss';
import Content from '../../components/Content/Content';
import Pagination from '../../components/Paginaton/Pagination';
import useSearch from '../../hooks/useSearchParamsContext';

const MainPage = () => {
  const { currentGoods } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { getParams, updateParams } = useSearch();
  const params = getParams();

  const getGoods = () => {
    let goods = currentGoods;
    if (searchParams.get('size')) {
      goods = goods.filter((item) => item.size === searchParams.get('size'));
    }
    if (searchParams.get('colors')) {
      goods = goods.filter((item) => item.colors.includes(searchParams.get('colors')));
    }
    return goods;
  };

  const goods = getGoods();

  useEffect(() => {
    updateParams(params, {});
  }, [dispatch, params]);

  return (
    <div className={wrapper}>
      <Content goods={goods} />
      <Pagination />
    </div>
  );
};

export default MainPage;
