import React from 'react';
import { HeaderProps } from '../types/Header.types';
import './Header.scss';

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header className="header marketplace">
      <div className="container">
        <h1 className="header-title">{pageTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
