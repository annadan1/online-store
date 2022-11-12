import React from 'react';
import { useSelector } from 'react-redux';
import { wrapper } from './Store.module.scss';
import Content from '../Content/Content';
import Pagination from '../Paginaton/Pagination';

const Store = () => {
  const { currentGoods } = useSelector((state) => state.goods);

  return (
    <div className={wrapper}>
      <Content goods={currentGoods} />
      <Pagination />
    </div>
  );
};

export default Store;
