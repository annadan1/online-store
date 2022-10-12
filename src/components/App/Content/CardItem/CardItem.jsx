import React from 'react';
import { useDispatch } from 'react-redux';
import {
  card, aboutItem, buttonAddToCart, iconAddToCart,
} from './CardItem.module.scss';
import AddToCart from '../../../../assets/images/addToCart.svg';
import { actions } from '../../../../slices/cartSlices';

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.addGoods(item));
  };

  return (
    <div className={card}>
      <img src={item.imageUrl} alt={item.title} />
      <div className={aboutItem}>
        <div>{`Название: ${item.title}`}</div>
        <div>{`Размер: ${item.size}`}</div>
        <div>{`Состав: ${item.consist}`}</div>
        <div>{`Цена: ${item.price} ₽`}</div>
        <button type="button" className={buttonAddToCart} onClick={() => handleClick(item)}>
          <AddToCart className={iconAddToCart} />
          Добавить
        </button>
      </div>
    </div>
  );
};

export default CardItem;
