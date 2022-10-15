import React from 'react';
import { Link } from 'react-router-dom';
import {
  wrapperEmptyCart, buttonReturnToStore, linkReturnToStore, infoEmptyCart,
} from './Cart.module.scss';

const EmptyCart = () => (
  <div className={wrapperEmptyCart}>
    <div className={infoEmptyCart}>
      <div>К сожалению, корзина пуста:(</div>
      <button type="button" className={buttonReturnToStore}>
        <Link to="/" className={linkReturnToStore}>Вернуться к списку товаров</Link>
      </button>
    </div>
  </div>
);

export default EmptyCart;
