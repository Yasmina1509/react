import React from 'react';
import './Header.css';
import MarsLogo from '../images/Marslogo.png'

function Header() {
  return (
    <header className="App-header">
      <img src={MarsLogo} className="App-logo" alt="logo" />
      <nav>
        <a href="#home">Home</a>
        <a href="#learning">Learning</a>
        <a href="#shop" className="active">Shop</a>
        <button>+ Post yaratish</button>
      </nav>
    </header>
  );
}

export default Header;