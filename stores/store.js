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
      } 
    });
  }

  getState () {
    return this.state;
  }

  loadData (data) {
    let immutableItem = Immutable.fromJS(data);
    
    this.state = this.state.mergeDeep(immutableItem);
   
    this.emit(CHANGE_EVENT);
  }

  updateSearchQuery (query) {
    this.state = this.state.updateIn(['app', 'search'], () => {
      return Immutable.fromJS({
        query: query
      });
    });

    this.emit(CHANGE_EVENT);
  }
}

export default Store;
