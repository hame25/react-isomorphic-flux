import React from 'react';
import GlobalHeader from '../shared/header/';
import HeroNav from '../hero-navigation/';
import Router from 'react-router';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
//import config from 'config';
import config from '../../config';
import url from 'url';
import Base from '../base';

let Link = Router.Link;

class Home extends Base {

  constructor () {
    super();
    this.displayName = 'Home';
  }

  render () {
    return (
      <div>
        <HeroNav data={this.props.data.app.taxonomy}/>
        <Link to="plp">Page 2</Link>
      </div>
    );
  }
}

Home.fetchData = function () {
  return ({title: 'Hello world'});
}

export default Home;