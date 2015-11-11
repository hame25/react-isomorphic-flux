import AppDispatcher from '../dispatcher/';
import assign from 'object-assign';
//import 'whatwg-fetch';
import fetch from 'isomorphic-fetch';
import {EventEmitter} from "events";

const CHANGE_EVENT = 'change';

//let appData = {loading: true};
let appData = {};

let AppStore = assign({}, EventEmitter.prototype, {

  emitChange () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  getAllData () {
    return appData;
  },

  testMe () {
    appData = {'test' : 'me'};
  },

  /*loadData () {
    fetch('http://localhost:1991/product')
    .then(function(response) {
      return response.json();
    }).then(function(product) {
      appData.loading = false;
      appData.product = product;
      AppStore.emitChange();
    });
  }*/
  setInitalData (initialData) {
    appData = initialData;
  }
});

AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch(action.actionType) {
    case 'LOAD_DATA':
    AppStore.loadData()
    break;
  }

});

export default AppStore;