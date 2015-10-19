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

  handleClick () {
    alert('Clientside clicked');
    //update
    this.props.cursor.cursor('home').update('title', function () {
      return 'new title updated!!!';
    });
  }

  render () {
    return (
      <div>
        <HeroNav cursor={this.props.cursor.cursor(['app', 'taxonomy'])}/>
        <h2 onClick={this.handleClick.bind(this)}>{this.props.cursor.cursor('home').get('title')}</h2>
        <Link to="plp">Page 2</Link>
      </div>
    );
  }
}

Home.fetchData = function () {
  return ({title: 'Hello world'});
}

export default Home;