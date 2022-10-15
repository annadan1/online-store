import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import EmptyCart from '../../components/Cart/EmptyCart';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      {cart.totalCount === 0 ? <EmptyCart /> : <Cart cart={cart} />}
    </div>
  );
};

export default CartPage;
