import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loupe from '../../../assets/images/loupe.svg';
import {
  loupeIcon, root, deleteButton, submitButton,
} from './Search.module.scss';
import Delete from '../../../assets/images/x.svg';
import useSearch from '../../../hooks/useSearchParamsContext';

const Search = () => {
  const { updateParams, getParams } = useSearch();
  const [searchParams] = useSearchParams();
  const [value, setValue] = React.useState('');
  const params = getParams();
  const name = searchParams.get('name') || '';

  useEffect(() => {
    setValue(name);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParams = { ...params, name: value };
    updateParams(params, newParams);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    setValue('');
    const newParams = { ...params, name: '' };
    updateParams(params, newParams);
  };

  return (
    <div className={root}>
      <form onSubmit={handleSubmit}>
        <button type="submit" className={submitButton}>
          <Loupe className={loupeIcon} />
        </button>
        <input type="text" placeholder="Найти носок" onChange={handleChange} value={value} />
        {value !== '' && <button type="button" aria-label="Delete" className={deleteButton} onClick={handleDeleteButton}><Delete /></button>}
      </form>
    </div>
  );
};

export default Search;
