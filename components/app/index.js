import React from 'react';
import {RouteHandler as RouteHandler} from 'react-router';
import GlobalHeader from '../shared/header';
import Base from '../base';
//import fetch from 'isomorphic-fetch';
//require('es6-promise').polyfill();
//import config from 'config';
import config from '../../config';
import url from 'url';

if (process.env.BROWSER) {
    require('../../assets/styles/_normalize.scss');
}

class App extends Base {

  constructor () {
    super();
    this.displayName = 'App';
  }

  render () {
    return (
      <div>
        <header>
          <GlobalHeader data={this.props.data.getIn(['app', 'search'])}/>
        </header>
        <section>
          <RouteHandler {...this.props}/>
        </section>
      </div>
    ); 
  }
}

export default App;