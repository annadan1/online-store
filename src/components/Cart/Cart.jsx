import React from 'react';
import CartItem from './CartItem/CartItem';
import { cartResult } from './Cart.module.scss';

const Cart = ({ cart }) => (
  <div>
    <div>
      {cart.items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
    <div className={cartResult}>
      <div>
        {`Всего товаров: ${cart.totalCount}`}
      </div>
      <div>
        {`На сумму: ${cart.totalCount} ₽`}
      </div>
    </div>
  </div>
);
export default Cart;
