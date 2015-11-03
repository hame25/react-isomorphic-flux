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
        <Search data={this.props.data}/>
      </div>
    );
  }
}

export default GlobalHeader;