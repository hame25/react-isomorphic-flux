import React from 'react';
import Base from '../base';
import NavList from './nav-list.js';

class NavItem extends Base {

  constructor () {
    super();
    this.displayName = 'NavItem';
  }

  render () {
    let item = this.props.item;
    let taxonomy = item.get('subCats');

    return (
      <li key={this.props.key}>
        <a href={item.get('url')}>
          {item.get('name')}
        </a>
        {taxonomy ? <NavList data={taxonomy}/> : ''}
      </li>
    );
  }
}

export default NavItem;