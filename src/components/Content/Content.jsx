import React from 'react';
import CardItem from './CardItem/CardItem';
import Filters from '../Filters/Filters';
import { content } from './Content.module.scss';
import Header from '../Header/Header';

const Content = ({ goods }) => (
  <>
    <Header />
    <Filters />
    <div className={content}>
      {goods.map((item) => <CardItem item={item} key={item.id} />)}
    </div>
  </>
);

export default Content;
