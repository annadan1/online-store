import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSortMethods from '../../../../hooks/useSortMethods';
import {
  currentProp, properties, container, popup, popupContent, popupItem, popupContainer,
} from './Sort.module.scss';
import Select from './Select/Select';
import { actions } from '../../../../slices/filtersSlices';

const Sort = ({ allGoods }) => {
  const [open, setOpen] = useState(false);
  const { method } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const currentColors = allGoods.reduce((acc, i) => {
    i.colors.forEach((color) => {
      if (!acc.includes(color)) {
        acc.push(color);
      }
    });
    return acc;
  }, []);

  const currentSize = allGoods.reduce((acc, { size }) => {
    if (!acc.includes(size)) {
      acc.push(size);
    }
    return acc;
  }, []);

  const { sortMethods } = useSortMethods();

  const handleClick = (currentMethod) => {
    dispatch(actions.changeMethod(currentMethod));
    setOpen(false);
  };

  return (
    <div className={container}>
      <div className={properties}>
        <span>Сортировать: </span>
        <button className={currentProp} type="button" onClick={() => setOpen(!open)}>
          {method.name}
        </button>
        {open && (
          <div className={popup}>
            <ul className={popupContent}>
              <div className={popupContainer}>
                {sortMethods.map((sortMethod, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(sortMethod)}
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
      <Select text="Цвет" sortMethods={currentColors} />
      <Select text="Размер" sortMethods={currentSize} />
    </div>
  );
};

export default Sort;
