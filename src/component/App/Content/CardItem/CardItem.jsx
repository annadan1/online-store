import React from 'react';
import { card } from './CardItem.module.scss';

const CardItem = ({ item }) => (
  <div className={card}>
    <img src={item.imageUrl} alt={item.title} />
    <span>{item.title}</span>
  </div>
);

export default CardItem;
