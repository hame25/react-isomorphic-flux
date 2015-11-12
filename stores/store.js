import {EventEmitter} from 'events';
import Immutable from 'immutable';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

class Store extends EventEmitter {

  constructor (dispatcher, state) {
    super();

    let self = this;

    state = state || {};

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

  loadData (data) {

    let immutableItem = Immutable.fromJS(data);

    let y = this.state.mergeDeep(immutableItem).toJS();
    this.state = Immutable.fromJS(y);
   
    this.emit(CHANGE_EVENT);
  }
}

export default Store;
