import React from 'react';
import Base from '../base';

class NavItem extends Base {

  constructor () {
    super();
    this.displayName = 'NavItem';
  }

  render () {
    let item = this.props.item;
    return (
      <li key={this.props.key}>
        <a href={item.get('url')}>
          {item.get('name')}
        </a>
      </li>
    );
  }
}

export default NavItem;