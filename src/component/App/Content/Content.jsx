import React from 'react';
import CardItem from './CardItem/CardItem';
import Filters from '../Filters/Filters';
import { content } from './Content.module.scss';

const Content = ({ goods }) => {
  console.log(goods);
  return (
    <div>
      <Filters />
      <div className={content}>
        {goods.map((item) => <CardItem item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Content;
