import React from 'react';
import Loupe from '../../../../assets/images/loupe.svg';
import { loupeIcon, root } from './Search.module.scss';

const Search = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={root}>
      <Loupe className={loupeIcon} />
      <input type="text" placeholder="Найти носок" onChange={handleChange} />
    </div>
  );
};

export default Search;
