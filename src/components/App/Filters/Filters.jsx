import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filters, buttons } from './Filters.module.scss';
import Sort from './Sort/Sort';
import {
  fetchCurrentGoods,
  fetchAllGoods,
} from '../../../slices/goodsSlices.js';
import Button from './Button/Button.jsx';

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { allGoods } = useSelector((state) => state.goods);
  const { page, limit, method } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    setActiveFilter(id);
    const request = {
      path: id,
      params: { p: page, l: limit, method },
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
