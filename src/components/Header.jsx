import React from 'react';
import '../styles/Header.scss';

function Header({ countTasks }) {
  return (
    <header className="header">
      <h1 className='header__logo hover'>Todo list: {countTasks}</h1>
    </header>
  );
}

export default Header;
