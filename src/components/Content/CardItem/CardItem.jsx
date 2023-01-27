import React from 'react';
import { useSelector } from 'react-redux';
import {
  card, aboutItem, imageProduct,
} from './CardItem.module.scss';

import Buttons from '../Buttons/Buttons';

const CardItem = ({ item }) => {
  const { items } = useSelector((state) => state.cart);
  const addedToCart = items.find((i) => i.id === item.id);

  return (
    <div className={card}>
      <img src={item.imageUrl} alt={item.title} className={imageProduct} />
      <div className={aboutItem}>
        <div>{`Название: ${item.title}`}</div>
        <div>{`Размер: ${item.size}`}</div>
        <div>{`Состав: ${item.consist}`}</div>
        <div>{`Цена: ${item.price} ₽`}</div>
        <Buttons item={item} addedToCart={addedToCart} />
      </div>
    </div>
  );
};

export default CardItem;
