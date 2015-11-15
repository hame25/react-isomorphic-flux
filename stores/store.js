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
          self.loadData(action.data)
          break;
      } 
    });
  }

  getState () {
    return this.state;
  }

  loadData (data) {

    let immutableItem = Immutable.fromJS(data);
    let newState = this.state.mergeDeep(immutableItem);
    
    this.state = newState;
   
    this.emit(CHANGE_EVENT);
  }
}

export default Store;
