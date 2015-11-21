import React from 'react';
import NavItem from './nav-item.js';
import Base from '../base';

class NavList extends Base {

  constructor () {
    super();
    this.displayName = 'NavList';
  }

  render () {
    let taxonomy = this.props.data;

    return (
        <ul>
        {taxonomy.map((item, i) => 
          <NavItem key={i} item={item}/>
        )}
        </ul>
    );
  }
}

export default NavList;