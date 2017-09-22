import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
require ('./hamburgerMenu.scss');

class HamburgerMenu extends Component {
  constructor(){
    super();
    this.state = { menuStatus: false }
  }

  changeStatus(){
    this.setState({ menuStatus: false })
  }

  render(){
    return (
      <Menu
        width={ '100%' }
        right
        bodyClassName={ "hbm-mobile" }
        menuClassName={ "hbm-menu" }
        isOpen={this.state.menuStatus}>
        <a href="#about" 
           className="bee-header-link menu-item" 
           onClick={() => this.changeStatus()}>about</a>
        <a href="#team" 
           className="bee-header-link menu-item"
           onClick={() => this.changeStatus()}>team</a>
        <a href="#advisors" 
           className="bee-header-link menu-item"
           onClick={() => this.changeStatus()}>advisors</a>
        <a href="#subscribe" 
           className="bee-header-link menu-item"
           onClick={() => this.changeStatus()}>subscribe</a>
      </Menu>
    );
  }
}

export default HamburgerMenu;


