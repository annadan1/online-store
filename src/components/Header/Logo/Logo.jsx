import React from 'react';
import { Link } from 'react-router-dom';
import Sock from '../../../assets/images/sock.svg';
import { sockIcon, logo } from './Logo.module.scss';

const Logo = () => (
  <Link to="/">
    <div className={logo}>
      Н
      <Sock className={sockIcon} />
      СКИ
    </div>
  </Link>
);

export default Logo;
