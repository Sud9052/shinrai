import React from 'react';
import './Header.css';
import logo from './Assets/Shinrai.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt="SHINRAI"  className="logo" />
      </div>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
