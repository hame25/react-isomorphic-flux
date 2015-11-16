import React from 'react';
import Base from '../base';
import actions from '../../actions';

class ProductTile extends Base {

  constructor () {
    super();
    this.displayName = 'ProductTile';
  }

  onAddToBasket () {
    let productId = this.props.data.get('id');
    actions.addToBasket(productId, 1 );
  }

  render () {
    let item = this.props.data

    return (
        <li>
          <h3>{item.get('name')}</h3>
          <img src={item.getIn(['image', 'url'])} />
          <p className='price'>£{item.get('price')}</p>
          <button onClick={this.onAddToBasket.bind(this)}>Add to basket</button>
          <p>{item.get('qtyInBasket')} in basket</p>
        </li>
    );
  }
}

export default ProductTile;