import React from 'react';
require ("./navbar.scss");

const NavBar = () => (
  <nav>
    <div className="logo_image">LOGO</div>
    <div className="navbar-links">
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




