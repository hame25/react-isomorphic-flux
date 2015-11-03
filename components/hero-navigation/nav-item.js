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
        <a href={item.url}>
          {item.name}
        </a>
      </li>
    );
  }
}

export default NavItem;