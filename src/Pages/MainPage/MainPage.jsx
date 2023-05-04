import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from './MainPage.module.scss';
import Content from '../../components/Content/Content';
import Pagination from '../../components/Paginaton/Pagination';
import useSearch from '../../hooks/useSearchParamsContext';

const MainPage = () => {
  const { currentGoods } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  const { getParams, updateParams } = useSearch();
  const params = getParams();

  useEffect(() => {
    updateParams(params, {});
  }, [dispatch, params]);

  return (
    <div className={wrapper}>
      <Content goods={currentGoods} />
      <Pagination />
    </div>
  );
};

export default MainPage;
