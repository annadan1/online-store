import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../slices/cartSlice.js';
import {
  imageProduct, productInfo, buttonCalc, cartCalc, cartContent, wrapper, cartInfo, buttonRemove,
} from './CartItem.module.scss';
import Add from '../../../assets/images/add.svg';
import Minus from '../../../assets/images/minus.svg';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddClick = (i) => {
    dispatch(actions.addItem(i));
  };

  const handleMinusClick = (i) => {
    dispatch(actions.minusItem(i));
  };

  const handleRemoveClick = (i) => {
    dispatch(actions.removeItem(i));
  };

  return (
    <div className={wrapper}>
      <div className={cartContent}>
        <div className={cartInfo}>
          <img src={item.imageUrl} alt="imageProduct" className={imageProduct} />
          <div>
            <div>{item.name}</div>
            <div className={productInfo}>{`размер: ${item.size}`}</div>
            <div className={productInfo}>{`состав: ${item.consist}`}</div>
          </div>
        </div>
        <div className={cartCalc}>
          <button type="button" aria-label="Minus" disabled={item.count === 1} className={buttonCalc} onClick={() => handleMinusClick(item)}>
            <Minus />
          </button>
          <span>{`${item.count} шт.`}</span>
          <button type="button" aria-label="Add" className={buttonCalc} onClick={() => handleAddClick(item)}><Add /></button>
        </div>
        <span>{`${item.count * item.price} ₽`}</span>
        <button type="button" aria-label="Remove" className={buttonRemove} onClick={() => handleRemoveClick(item)}><Add /></button>
      </div>
    </div>
  );
};

export default CartItem;
