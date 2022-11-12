import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import EmptyCart from '../../components/Cart/EmptyCart';
import Header from '../../components/Header/Header';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Header />
      {cart.totalCount === 0 ? <EmptyCart /> : <Cart cart={cart} />}
    </div>
  );
};

export default CartPage;
