import React from 'react';
require ("./navbar.scss");

const NavBar = () => (
  <nav className="bee-nav-container">
    <div className="bee-nav-logo-container">LOGO</div>
    <div className="bee-nav-links-container">
      <a>Home</a>
      <a>About</a>
      <a>Team</a>
      <a>FAQ</a>
      <a>Contact</a>
      <a>Token Sale</a>
    </div>
  </nav>
);

export default NavBar;




