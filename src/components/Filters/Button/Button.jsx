import React from 'react';
import { item, activeItem } from './Button.module.scss';

const Button = ({
  text, id, activeFilter, handleClick,
}) => (
  <button
    key={id}
    className={activeFilter === id ? activeItem : item}
    onClick={() => handleClick(id)}
    type="button"
  >
    {text}
  </button>
);

export default Button;
