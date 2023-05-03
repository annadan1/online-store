import React from 'react';
import { useDispatch } from 'react-redux';
import {
  buttonsGroup, cartCalc, buttonCalc, buttonAddToCart,
} from './Buttons.module.scss';
import { actions } from '../../../slices/cartSlices';
import Add from '../../../assets/images/add.svg';
import Minus from '../../../assets/images/minus.svg';

const Buttons = ({ item, addedToCart }) => {
  const dispatch = useDispatch();

  const handleAddClick = (i) => {
    dispatch(actions.addItem(i));
  };

  const handleMinusClick = (i) => {
    dispatch(actions.minusItem(i));
  };

  return (
    <div className={buttonsGroup}>
      {addedToCart ? (
        <div className={cartCalc}>
          <button type="button" className={buttonCalc} aria-label="Minus" onClick={() => handleMinusClick(item)}><Minus /></button>
          <span>{ `${addedToCart.count}`}</span>
          <button type="button" className={buttonCalc} aria-label="Add" onClick={() => handleAddClick(item)}><Add /></button>
        </div>
      ) : (
        <button type="button" className={buttonAddToCart} onClick={() => handleAddClick(item)}>
          <span>Добавить в корзину</span>
        </button>
      )}
    </div>
  );
};

export default Buttons;
