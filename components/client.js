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
// Tidy this up later, can structure better

Router.run(routes, Router.HistoryLocation, function (Handler, req) {

	function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

	function render() {
		console.log('Render called');
		React.render(<Handler data = {store.getState()}/>, content);
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
			//inital setup from server
			initialData = {};

			//setup listener
			store.on(CHANGE_EVENT, function () {
	      render();
	   	});

			render();
		}
	}
	getDataToRender();
});