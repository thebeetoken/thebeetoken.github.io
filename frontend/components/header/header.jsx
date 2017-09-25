import React from 'react';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
require ("./header.scss");

const Header = () => (
  <nav className="bee-header-container">
    <div className="bee-header-logo-container">
      <img className="bee-header-logo" src="https://res.cloudinary.com/duettwoxj/image/upload/v1505623250/logo-horizontal_zizcll.svg" />
    </div>
    <div className="bee-header-links-container">
      <a href="#about" className="bee-header-link">about</a>
      <a href="#team" className="bee-header-link">team</a>
      <a href="#advisors" className="bee-header-link">advisors</a>
      <a href="#subscribe" className="bee-header-link">subscribe</a>
    </div>
    <HamburgerMenu className="hbm-mobile"/>
  </nav>
);

export default Header;



