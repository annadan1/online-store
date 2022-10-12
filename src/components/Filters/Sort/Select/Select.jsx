import React, { useState } from 'react';
import {
  currentProp, properties, popup, popupContent, popupItem, deleteButton, popupContainer,
} from '../Sort.module.scss';
import Delete from '../../../../assets/images/x.svg';

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
      <button type="button" className={currentProp} onClick={() => setOpen(!open)}>
        {currentSelection}
      </button>
      {currentSelection !== 'Все' && <button type="button" aria-label="delete" className={deleteButton} onClick={() => setCurrentSelection('Все')}><Delete /></button>}
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
