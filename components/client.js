import 'whatwg-fetch';
import React from 'react';
import Router from 'react-router';
import routes from '../routes';
import fetchData from '../utils/fetchData';

let content = document.getElementById('content');
let data = JSON.parse(document.getElementById('initial-data').innerHTML);

// Start the client-side router using only `pushState`
// with the supplied routes
Router.run(routes, Router.HistoryLocation, function (Handler, req) {

	function render() {
		React.render(<Handler data = {data}/>, content);
	} 

	function getDataToRender () {
		fetchData(req).then((pageData) => {
			let objKey = Object.keys(pageData)[0];
			data[objKey] = pageData[objKey];
			
			render();
		}).catch(() => {
      //window.location = `/500.html`;
      console.log('error');
    });
	}

	getDataToRender();
});