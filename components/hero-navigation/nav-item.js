import React from 'react';
import Router from 'react-router';
import Base from '../base';
import NavList from './nav-list.js';

let Link = Router.Link;

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
        <Link to={'/plp/' + item.get('id')}>
          {item.get('name')}
        </Link>
        {taxonomy ? <NavList data={taxonomy}/> : ''}
      </li>
    );
  }
}

export default NavItem;