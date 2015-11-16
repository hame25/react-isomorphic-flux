import {EventEmitter} from 'events';
import Immutable from 'immutable';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

class Store extends EventEmitter {

  constructor (dispatcher, state) {
    super();

    let self = this;

    state = state || {};

    // Turn state to immutable
    this.state = Immutable.fromJS(state);

    dispatcher.register(function (payload) {
      let action = payload.action

      switch(action.actionType) {
        case 'LOAD_DATA':
          self.loadData(action.data);
          break;
        case 'UPDATE_SEARCH_QUERY':
          self.updateSearchQuery(action.query);
          break;
        case 'ADD_TO_BASKET':
          self.updateQtyInBasket(action.productId, action.qty);
          break;
      } 
    });
  }

  getState () {
    return this.state;
  }

  //load a pages specific data
  loadData (data) {
    let immutableItem = Immutable.fromJS(data);

    this.state = this.state.mergeDeep(immutableItem);
   
    this.emit(CHANGE_EVENT);
  }

  //update the search query keyword
  updateSearchQuery (query) {
    this.state = this.state.updateIn(['app', 'search'], () => {
      return Immutable.fromJS({
        query: query
      });
    });

    this.emit(CHANGE_EVENT);
  }

  //update a specific items in basket quantity
  updateQtyInBasket (productId, qty) {
    let allProducts = this.state.getIn(['plp', 'products']);

    let list = allProducts.update(
      allProducts.findIndex(function(item) { 
        return item.get('id') === productId; 
      }), function(item) {
        let currentQty = item.get('qtyInBasket');
        return item.set('qtyInBasket', parseInt(currentQty + qty));
      }
    ); 

    this.state = this.state.updateIn(['plp', 'products'], () => {
      return list
    });

    this.emit(CHANGE_EVENT);
  }
}

export default Store;
