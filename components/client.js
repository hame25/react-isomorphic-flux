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
let data = JSON.parse(document.getElementById('initial-data').innerHTML);

let store = new Store(dispatcher, data);



// Start the client-side router using only `pushState`
// with the supplied routes

Router.run(routes, Router.HistoryLocation, function (Handler, req) {

	store.on(CHANGE_EVENT, function () {
      render();
   });

	function render() {
		console.log(store.getState())
		React.render(<Handler data = {data}/>, content);
		//React.render(<Handler data = {store.getState()}/>, content);
	} 

	function getDataToRender () {
		fetchData(req).then((pageData) => {
			let objKey = Object.keys(pageData)[0];
			data[objKey] = pageData[objKey];

			//AppStore.setInitialData(data);

			render();
		}).catch(() => {
      //window.location = `/500.html`;
      console.log('error');
    });
	}

	//getDataToRender();
	render();
});