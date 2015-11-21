import React, {PropTypes} from 'react';
import NavList from './nav-list.js';
import Base from '../base';

class HeroNav extends Base {

  constructor () {
    super();
    this.displayName = 'HeroNav';
  }

  render () {
    let taxonomy = this.props.data;

    return (
      <div id="hero-nav">
        <h2>Shop by department</h2>
        <NavList data={taxonomy} />
      </div>  
    );
  }
}

HeroNav.propTypes = {data: PropTypes.object.isRequired};  

export default HeroNav;