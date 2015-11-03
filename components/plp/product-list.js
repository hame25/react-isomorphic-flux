import React from 'react';
import ProductTile from './product-tile.js';
import Base from '../base';

class ProductList extends Base {

  constructor () {
    super();
    this.displayName = 'ProductList';
  }

  render () {
    let products = this.props.data;

    return (
        <ul>
        {products.map((item, i) => 
          <ProductTile key={i} data={item}/>
        )}
        </ul>
    );
  }
}

export default ProductList;