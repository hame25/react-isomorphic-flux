import React from 'react';
import GlobalHeader from '../shared/header/';
import Router from 'react-router';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
//import config from 'config';
import config from '../../config';
import url from 'url';
import Base from '../base';
import ProductList from './product-list';

let Link = Router.Link;


class plp extends Base {

  constructor () {
    super();
    this.displayName = 'PLP';
  }

  render () {
    return (
      <div>
        <div className='plp-page'>
          <ProductList cursor={this.props.cursor.cursor(['plp', 'products'])}/>
        </div>
      </div>
    );
  }
}

plp.fetchData = function(){
  return fetch(url.format(config.services.plp))
    .then(function(response) {
      return response.json();
    }).then(function(productData) {
      return(productData);
  });
}

export default plp;