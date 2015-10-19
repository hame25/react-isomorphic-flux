import React from 'react';
import Base from '../base';

class ProductTile extends Base {

  constructor () {
    super();
    this.displayName = 'ProductTile';
  }

  onAddToBasket () {
    let qty = this.props.cursor.get('qtyInBasket');

    this.props.cursor.update('qtyInBasket', function () {
      let newQty = parseInt(qty + 1)
      return newQty;
    });
  }

  render () {
    let item = this.props.cursor

    return (
        <li>
          <h3>{item.get('name')}</h3>
          <img src={item.get('image').get('url')} />
          <p className='price'>£{item.get('price')}</p>
          <button onClick={this.onAddToBasket.bind(this)}>Add to basket</button>
          <p>{item.get('qtyInBasket')} in basket</p>
        </li>
    );
  }
}

export default ProductTile;