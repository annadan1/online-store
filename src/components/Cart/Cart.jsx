import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import {
  cartResult, removeItems, buttonRemoveItems, trashIcon, wrapper, payment, paymentLink,
} from './Cart.module.scss';
import Trash from '../../assets/images/trash.svg';
import { actions } from '../../slices/cartSlices.js';

const Cart = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(actions.removeItems());
  };

  return (
    <div className={wrapper}>
      <div className={removeItems}>
        <button type="button" aria-label="Trash" className={buttonRemoveItems} onClick={() => handleRemoveClick()}>
          <Trash className={trashIcon} />
          Очистить корзину
        </button>
      </div>
      <div>
        {cart.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className={cartResult}>
        <div>
          {`Всего: ${cart.totalCount}`}
        </div>
        <div>
          {`На сумму: ${cart.totalPrice} ₽`}
        </div>
        <button type="button" className={payment}>
          <Link to="/payment" className={paymentLink}>
            Перейти к покупке
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Cart;
