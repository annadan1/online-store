import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filters, buttons } from './Filters.module.scss';
import Sort from './Sort/Sort';
import {
  fetchCurrentGoods,
  fetchAllGoods,
} from '../../../slices/goodsSlices.js';
import useSortMethods from '../../../hooks/useSortMethods';
import Button from './Button/Button.jsx';

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { allGoods, currentPage, limit } = useSelector((state) => state.goods);
  const dispatch = useDispatch();
  const { activeMethod } = useSortMethods();

  const handleClick = (id) => {
    setActiveFilter(id);
    const request = {
      path: id,
      params: { p: currentPage, l: limit, ...activeMethod.method },
    };
    dispatch(fetchCurrentGoods(request));
    dispatch(fetchAllGoods(id));
  };

  return (
    <div className={filters}>
      <div className={buttons}>
        <Button
          text="Все"
          id="all"
          handleClick={handleClick}
          activeFilter={activeFilter}
        />
        <Button
          text="Женщинам"
          id="woman"
          handleClick={handleClick}
          activeFilter={activeFilter}
        />
        <Button
          text="Мужчинам"
          id="man"
          handleClick={handleClick}
          activeFilter={activeFilter}
        />
        <Button
          text="Унисекс"
          id="unisex"
          handleClick={handleClick}
          activeFilter={activeFilter}
        />
      </div>
      <Sort allGoods={allGoods} />
    </div>
  );
};

export default Filters;
