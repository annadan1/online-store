import { useState } from 'react';

const useSortMethods = () => {
  const sortMethods = [
    { name: 'по убыванию цены', method: { sortBy: 'price', order: 'desc' } },
    { name: 'по возрастанию цены', method: { sortBy: 'price', order: 'asc' } },
    { name: 'по популярности', method: { sortBy: 'rating', order: 'desc' } },
    { name: 'от А до Я', method: { sortBy: 'title', order: 'asc' } },
    { name: 'от Я до А', method: { sortBy: 'title', order: 'desc' } },
  ];

  const [activeMethod, setActiveMethod] = useState({ name: 'по популярности', method: { sortBy: 'rating', order: 'desc' } });
  return { activeMethod, setActiveMethod, sortMethods };
};

export default useSortMethods;
