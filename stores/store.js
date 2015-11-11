import {EventEmitter} from 'events';
import Immutable from 'immutable';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

class Store extends EventEmitter {

  constructor (dispatcher, state) {
    super();

    let self = this;

    state = state || {};
    //state = _.merge({}, Store.defaultState, state);
    //state = assign({}, Store.defaultState, state));

    // Register handlers
    dispatcher.register(function (action) {
       switch(action.actionType) {
        case 'LOAD_DATA':
        self.loadData()
        break;
      }
    });

    // Turn state to immutable
    this.state = Immutable.fromJS(state);
  }

  getState () {
    return this.state;
  }

  loadData () {
    var immutableItem = Immutable.fromJS({test: 'alex'});
    console.log(this.state);
    //this.state = this.state.updateIn(['cart', 'items'], items => items.push(immutableItem));
    this.state.merge(immutableItem);
    console.log(this.state);
    this.emit(CHANGE_EVENT);
  }
}

// Default state
Store.defaultState = {
  title: 'hello world'
};

export default Store;
