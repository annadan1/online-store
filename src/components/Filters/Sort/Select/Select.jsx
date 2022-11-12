import React, { useState } from 'react';
import {
  currentProp, properties, popup, popupContent, popupItem, deleteButton, popupContainer,
} from '../Sort.module.scss';
import Delete from '../../../../assets/images/x.svg';
import useSearch from '../../../../hooks/useSearchParamsContext';

const Select = ({
  text, sortMethods, currentSelection, sort,
}) => {
  const [open, setOpen] = useState(false);
  const { getParams, updateParams } = useSearch();
  const params = getParams();

  const handleClick = (newMethod) => {
    const newParams = { p: 1, ...newMethod };
    updateParams(params, newParams);
    setOpen(false);
  };

  return (
    <div className={properties}>
      <span>{`${text}: `}</span>
      <button type="button" className={currentProp} onClick={() => setOpen(!open)}>
        {currentSelection}
      </button>
      {currentSelection !== 'Все' && <button type="button" aria-label="delete" className={deleteButton} onClick={() => handleClick({ [sort]: '' })}><Delete /></button>}
      {open && (
      <div className={popup}>
        <ul className={popupContent}>
          <div className={popupContainer}>
            {sortMethods.map((sortMethod, index) => (
              <li
                key={index}
                onClick={() => handleClick({ [sort]: sortMethod })}
                className={popupItem}
              >
                {sortMethod}
              </li>
            ))}
          </div>
        </ul>
      </div>
      )}
    </div>
  );
};

export default Select;
