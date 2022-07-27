import React from 'react';
import './Header.css';

function Header(countTasks) {
  return (
    <header className="header">
      <h1 className='header__logo hover'>Todos: {countTasks}</h1>
    </header>
  );
}

export default Header;
