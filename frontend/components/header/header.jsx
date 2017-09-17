import React from 'react';
require ("./header.scss");

const Header = () => (
  <nav className="bee-header-container">
    <div className="bee-header-logo-container">
      <img className="bee-header-logo" src="http://res.cloudinary.com/duettwoxj/image/upload/v1505623250/logo-horizontal_zizcll.svg" />
    </div>
    <div className="bee-header-links-container">
      <a href="#" className="bee-header-link">about</a>
      <a href="#" className="bee-header-link">team</a>
      <a href="#" className="bee-header-link">advisors</a>
      <button href="#" className="bee-header-whitepaper-button">
        whitepaper
      </button>
    </div>
  </nav>
);

export default Header;




