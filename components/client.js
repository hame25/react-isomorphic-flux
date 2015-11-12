import 'whatwg-fetch';
import React from 'react';
import Router from 'react-router';
import routes from '../routes';
import fetchData from '../utils/fetchData';

//import AppStore from '../stores/';
import Store from '../stores/store';
import dispatcher from '../dispatcher/';

const CHANGE_EVENT = 'change';

let content = document.getElementById('content');
let initialData = JSON.parse(document.getElementById('initial-data').innerHTML);
let data = initialData;

let store = new Store(dispatcher, data);



// Start the client-side router using only `pushState`
// with the supplied routes

Router.run(routes, Router.HistoryLocation, function (Handler, req) {

	store.on(CHANGE_EVENT, function () {
      render();
   });

	function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

	function render() {
		React.render(<Handler data = {store.getState().toJS()}/>, content);
	} 

	function getDataToRender () {
		if (isEmpty(initialData)) {

			fetchData(req).then((pageData) => {
		
				store.loadData(pageData);

			}).catch(() => {
	      //window.location = `/500.html`;
	      console.log('error');
	    });
		} else {
			initialData = {};
			render();
		}
	}
	getDataToRender();
});