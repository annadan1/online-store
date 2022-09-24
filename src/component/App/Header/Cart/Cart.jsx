import React from 'react';
import { useSelector } from 'react-redux';
import CartImage from '../../../../assets/images/shopping_bag.svg';
import {
  cartButton, cartIcon, cartInfo,
} from './Cart.module.scss';

const Cart = () => {
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <a href="/cart">
      <div className={cartButton}>
        <CartImage className={cartIcon} />
        <span className={cartInfo}>
          {totalCount}
        </span>
      </div>
    </a>
  );
};

export default Cart;
