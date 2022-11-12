import React from 'react';
import { useSelector } from 'react-redux';
import { filters, buttons } from './Filters.module.scss';
import Sort from './Sort/Sort';
import Button from './Button/Button.jsx';
import useSearch from '../../hooks/useSearchParamsContext';

const Filters = () => {
  const { allGoods } = useSelector((state) => state.goods);
  const { getParams, updateParams } = useSearch();
  const params = getParams();

  const handleClick = (newCategory) => {
    const categories = newCategory === 'Все' ? '' : newCategory;
    const newParams = { ...params, categories, p: 1 };
    updateParams(params, newParams);
  };

  return (
    <div className={filters}>
      <div className={buttons}>
        <Button
          text="Все"
          id="all"
          handleClick={handleClick}
        />
        <Button
          text="Женские"
          id="woman"
          handleClick={handleClick}
        />
        <Button
          text="Мужские"
          id="man"
          handleClick={handleClick}
        />
        <Button
          text="Унисекс"
          id="unisex"
          handleClick={handleClick}
        />
      </div>
      <Sort allGoods={allGoods} />
    </div>
  );
};

export default Filters;
