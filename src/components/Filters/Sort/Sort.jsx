import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { isEqual } from 'lodash';
import {
  currentProp, properties, container, popup, popupContent, popupItem, popupContainer,
} from './Sort.module.scss';
import Select from './Select/Select';
import useSearch from '../../../hooks/useSearchParamsContext';

const Sort = ({ allGoods }) => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [currentSortMethod, setCurrentSortMethod] = useState(null);
  const sortMethods = [
    { name: 'по убыванию цены', method: { sortBy: 'price', order: 'desc' } },
    { name: 'по возрастанию цены', method: { sortBy: 'price', order: 'asc' } },
    { name: 'по популярности', method: { sortBy: 'rating', order: 'desc' } },
    { name: 'от А до Я', method: { sortBy: 'title', order: 'asc' } },
    { name: 'от Я до А', method: { sortBy: 'title', order: 'desc' } },
  ];

  const { getParams, updateParams } = useSearch();
  const params = getParams();

  const currentSize = searchParams.get('size') || 'Все';
  const currentColor = searchParams.get('colors') || 'Все';

  useEffect(() => {
    const sortBy = searchParams.get('sortBy');
    const order = searchParams.get('order');
    const currentMethod = { sortBy, order };
    setCurrentSortMethod(sortMethods.find(({ method }) => isEqual(method, currentMethod)));
  }, [searchParams]);

  const currentColors = allGoods.reduce((acc, i) => {
    i.colors.forEach((color) => {
      if (!acc.includes(color)) {
        acc.push(color);
      }
    });
    return acc;
  }, []);

  const currentSizes = allGoods.reduce((acc, { size }) => {
    if (!acc.includes(size)) {
      acc.push(size);
    }
    return acc;
  }, []);

  const handleClick = (newMethod) => {
    updateParams(params, newMethod);
    setOpen(false);
  };

  return (
    <div className={container}>
      <div className={properties}>
        <span>Сортировать: </span>
        {currentSortMethod && (
        <button className={currentProp} type="button" onClick={() => setOpen(!open)}>
          {currentSortMethod.name}
        </button>
        )}
        {open && (
          <div className={popup}>
            <ul className={popupContent}>
              <div className={popupContainer}>
                {sortMethods.map((sortMethod, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(sortMethod.method)}
                    className={popupItem}
                  >
                    {sortMethod.name}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
      <Select text="Цвет" sortMethods={currentColors} currentSelection={currentColor} sort="colors" />
      <Select text="Размер" sortMethods={currentSizes} currentSelection={currentSize} sort="size" />
    </div>
  );
};

export default Sort;
