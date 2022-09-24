import React, { useState } from 'react';
import {
  currentProp, properties, popup, popupContent, popupItem,
} from '../Sort.module.scss';

const Select = ({ text, sortMethods }) => {
  const [open, setOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState('Все');

  const handleClick = (sortMethod) => {
    setCurrentSelection(sortMethod);
    setOpen(!open);
  };

  return (
    <div className={properties}>
      <span>{`${text}: `}</span>
      <span className={currentProp} onClick={() => setOpen(!open)}>
        {currentSelection}
      </span>
      <button>x</button>
      {open && (
      <div className={popup}>
        <ul className={popupContent}>
          {sortMethods.map((sortMethod, index) => (
            <li
              key={index}
              onClick={() => handleClick(sortMethod)}
              className={popupItem}
            >
              {sortMethod}
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Select;
