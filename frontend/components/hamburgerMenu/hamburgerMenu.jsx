import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
require ('./hamburgerMenu.scss');

class HamburgerMenu extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Menu isOpen="false">
        <a href="#about" className="bee-header-link">about</a>
        <a href="#team" className="bee-header-link">team</a>
        <a href="#advisors" className="bee-header-link">advisors</a>
        <button href="#" className="bee-header-whitepaper-button">whitepaper</button>
      </Menu>
    );
  }
}

export default HamburgerMenu;


