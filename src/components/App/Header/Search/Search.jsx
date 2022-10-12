import React from 'react';
import Loupe from '../../../../assets/images/loupe.svg';
import { loupeIcon, root, deleteButton } from './Search.module.scss';
import Delete from '../../../../assets/images/x.svg';

const Search = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={root}>
      <Loupe className={loupeIcon} />
      <input type="text" placeholder="Найти носок" onChange={handleChange} value={value} />
      {value !== '' && <button type="button" aria-label="Delete" className={deleteButton} onClick={() => setValue('')}><Delete /></button>}
    </div>
  );
};

export default Search;
