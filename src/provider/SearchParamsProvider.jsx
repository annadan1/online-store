import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';
import { omit } from 'lodash';
import searchParamsContext from '../context/SearchParamsContext';
import { fetchCurrentGoods, fetchAllGoods } from '../slices/goodsSlices';

const SearchParamsProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { search } = location;

  const updateParams = (prevParams, nextParams) => {
    let newParams = { ...prevParams };

    Object.entries(nextParams).forEach(([key, value]) => {
      if (!value) {
        newParams = omit(newParams, key);
      } else {
        newParams = { ...newParams, [key]: decodeURI(value) };
      }
    });

    const {
      categories, colors, size, title,
    } = newParams;
    const path = {
      categories, colors, size, title,
    };

    setSearchParams(newParams);
    dispatch(fetchCurrentGoods(newParams));
    dispatch(fetchAllGoods(path));
    return newParams;
  };

  const getParams = () => useMemo(() => {
    const defaultParams = {
      p: 1, l: 6, sortBy: 'rating', order: 'desc',
    };

    if (search) {
      const currentParams = search
        .slice(1)
        .split('&')
        .map((p) => p.split('='))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: decodeURI(value) }), {});
      return { ...defaultParams, ...currentParams };
    }
    return defaultParams;
  }, [search]);

  return (
    <searchParamsContext.Provider value={{ getParams, updateParams }}>
      {children}
    </searchParamsContext.Provider>
  );
};

export default SearchParamsProvider;
