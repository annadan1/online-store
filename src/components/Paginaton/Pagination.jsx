import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  selectPage, wrapper, activeSelectedPage, paginationButton, paginationIconPrev, paginationIconNext,
} from './Pagination.module.scss';
import Arrow from '../../assets/images/arrow.svg';
import useSearch from '../../hooks/useSearchParamsContext';

const Pagination = () => {
  const [pages, setPages] = useState(1);
  const [searchParams] = useSearchParams();

  const { getParams, updateParams } = useSearch();
  const params = getParams();

  const { allGoods } = useSelector((state) => state.goods);

  const page = Number(searchParams.get('p')) || 1;
  const limit = Number(searchParams.get('l')) || 6;

  useEffect(() => {
    if (allGoods.length !== 0) {
      setPages(Math.ceil(allGoods.length / limit));
    }
  });

  const handleClick = (newPage) => {
    window.scrollTo(0, 0);
    const newParams = { ...params, p: newPage };
    updateParams(params, newParams);
  };
  return (
    <div className={wrapper}>
      {page !== 1 && (
      <button type="button" onClick={() => handleClick(page - 1)} className={paginationButton}>
        <Arrow style={{ transform: 'rotate(180deg)' }} className={paginationIconPrev} />
        Предыдущая страница
      </button>
      )}
      {pages !== 1 && new Array(pages).fill().map((_, i) => (
        <button
          type="button"
          aria-label="buttonPagination"
          className={page === i + 1 ? activeSelectedPage : selectPage}
          onClick={() => handleClick(i + 1)}
          key={i}
        >
          {i + 1}

        </button>
      ))}
      {(pages !== 1 && page !== pages) && (
      <button type="button" onClick={() => handleClick(page + 1)} className={paginationButton}>
        Следующая страница
        <Arrow className={paginationIconNext} />
      </button>
      )}
    </div>
  );
};

export default Pagination;
