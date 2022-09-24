import React from 'react';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import { header } from './Header.module.scss';

const Header = () => (
  <div className={header}>
    <Logo />
    <Search />
    <Cart />
  </div>
);

export default Header;
