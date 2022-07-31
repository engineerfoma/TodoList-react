import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <h1 className='footer__logo hover'>{new Date().getFullYear()}. Todo-App</h1>
    </footer>
  );
}

export default Footer;
