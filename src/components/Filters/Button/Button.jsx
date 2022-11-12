import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { item, activeItem } from './Button.module.scss';

const Button = ({
  text, id, handleClick,
}) => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('categories') || 'Все';
  const [activeElem, setActiveElem] = useState(currentCategory);

  useEffect(() => {
    setActiveElem(searchParams.get('categories') || 'Все');
  }, [currentCategory]);

  return (
    <button
      key={id}
      className={activeElem === text ? activeItem : item}
      onClick={() => handleClick(text)}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
