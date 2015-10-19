import React from 'react';
import Search from '../search/'
import Base from '../../base';

class GlobalHeader extends Base {

  constructor () {
    super();
    this.displayName = 'GlobalHeader';
  }

  render () {
    return (
      <div id="global-header">
        <Search cursor={this.props.cursor}/>
      </div>
    );
  }
}

export default GlobalHeader;