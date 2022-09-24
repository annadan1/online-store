import React, { useState } from 'react';
import useSortMethods from '../../../../hooks/useSortMethods';
import {
  currentProp, properties, container, popup, popupContent, popupItem,
} from './Sort.module.scss';
import Select from './Select/Select';

const Sort = ({ allGoods }) => {
  const [open, setOpen] = useState(false);

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

  const { activeMethod, setActiveMethod, sortMethods } = useSortMethods();

  const handleClick = (method) => {
    setActiveMethod(method);
    setOpen(false);
  };

  return (
    <div className={container}>
      <div className={properties}>
        <span>Сортировать: </span>
        <span className={currentProp} onClick={() => setOpen(!open)}>
          {activeMethod.name}
        </span>
        {open && (
          <div className={popup}>
            <ul className={popupContent}>
              {sortMethods.map((sortMethod, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(sortMethod)}
                  className={popupItem}
                >
                  {sortMethod.name}
                </li>
              ))}
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
