import React from 'react';
import Sock from '../../../assets/images/sock.svg';
import { sockIcon, logo } from './Logo.module.scss';

const Logo = () => (
  <a href="/">
    <div className={logo}>
      Н
      <Sock className={sockIcon} />
      СКИ
    </div>
  </a>
);

export default Logo;
