import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
require ('./hamburgerMenu.scss');

class HamburgerMenu extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Menu
        width={ '100%' }
        noOverlay
        right
        bodyClassName={ "hbm-mobile" }
        menuClassName={ "hbm-menu" }>
        <a href="#about" className="bee-header-link menu-item">about</a>
        <a href="#team" className="bee-header-link menu-item">team</a>
        <a href="#advisors" className="bee-header-link menu-item">advisors</a>
      </Menu>
    );
  }
}

export default HamburgerMenu;


