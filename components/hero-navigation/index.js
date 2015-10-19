import React from 'react';
import NavItem from './nav-item.js';
import Base from '../base';

class HeroNav extends Base {

  constructor () {
    super();
    this.displayName = 'HeroNav';
  }

  render () {
    let taxonomy = this.props.cursor.deref();

    return (
      <div id="hero-nav">
        <h2>Shop by department</h2>
        <ul>
        {taxonomy.map((item, i) => 
          <NavItem key={i} item={item}/>
        )}
        </ul>
      </div>  
    );
  }
}

export default HeroNav;