import React from 'react';
import { useSelector } from 'react-redux';
import Buttons from '../../components/Content/Buttons/Buttons';

const ItemPage = ({ item }) => {
  const { items } = useSelector((state) => state.cart);
  const addedToCart = items.find((i) => i.id === item.id);

  return (
    <div>
      <div>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div>
        <div>{`Название: ${item.name}`}</div>
        <div>{`Размер: ${item.size}`}</div>
        <div>{`Состав: ${item.consist}`}</div>
        <div>{`Цена: ${item.price} ₽`}</div>
        <Buttons item={item} addedToCart={addedToCart} />
      </div>
    </div>
  );
};

export default ItemPage;
