import React from 'react';

import { imageProduct, productInfo } from './CartItem.module.scss';

const CartItem = ({ item }) => (
  <div>
    <div className={productInfo}>
      <img src={item.imageUrl} alt="imageProduct" className={imageProduct} />
      <span>{`${item.count} шт.`}</span>
      <button type="button">-</button>
      <button type="button">+</button>
    </div>
  </div>
);

export default CartItem;
