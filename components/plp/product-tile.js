import React from 'react';
import Base from '../base';

class ProductTile extends Base {

  constructor () {
    super();
    this.displayName = 'ProductTile';
  }

  onAddToBasket () {
    /*let qty = this.props.cursor.get('qtyInBasket');

    this.props.cursor.update('qtyInBasket', function () {
      let newQty = parseInt(qty + 1)
      return newQty;
    });*/
    alert('add clicked');
  }

  render () {
    let item = this.props.data

    return (
        <li>
          <h3>{item.name}</h3>
          <img src={item.image.url} />
          <p className='price'>£{item.price}</p>
          <button onClick={this.onAddToBasket.bind(this)}>Add to basket</button>
          <p>{item.qtyInBasket} in basket</p>
        </li>
    );
  }
}

export default ProductTile;