import React from 'react';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
require ("./header.scss");

const Header = () => (
  <nav className="bee-header-container">
    <div className="bee-header-logo-container">
      <img className="bee-header-logo" src="http://res.cloudinary.com/duettwoxj/image/upload/v1505623250/logo-horizontal_zizcll.svg" />
    </div>
    <HamburgerMenu/>
  </nav>
);

export default Header;


    //<div className="bee-header-links-container">
      //<a href="#about" className="bee-header-link">about</a>
      //<a href="#team" className="bee-header-link">team</a>
      //<a href="#advisors" className="bee-header-link">advisors</a>
      //<button href="#" className="bee-header-whitepaper-button">
        //whitepaper
      //</button>
    //</div>


