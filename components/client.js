import 'whatwg-fetch';
import React from 'react';
import Router from 'react-router';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor'
import routes from '../routes';
import fetchData from '../utils/fetchData';

let content = document.getElementById('content');
let initialData = JSON.parse(document.getElementById('initial-data').innerHTML);
let data = Immutable.fromJS(initialData);
let cursor;

// Start the client-side router using only `pushState`
// with the supplied routes
Router.run(routes, Router.HistoryLocation, function (Handler, req) {

	function onCursorChange (newData) {
		data = newData;
		cursor = Cursor.from(data, onCursorChange);
		render();
	}

	function isEmpty(obj) {
    	return Object.keys(obj).length === 0;
  	}

  	function render() {
  		React.render(<Handler cursor = {cursor}/>, content);
  	}

	function getDataToRender () {
		if (isEmpty(initialData)) {
			fetchData(req).then((data) => {

				let objKey = Object.keys(data)[0];
				let objData = Immutable.fromJS(data[objKey]);

				/** REVIEW THIS LATER ***/
				cursor.update(objKey, function () {
      				return objData;
    			});
			
          });//.catch(() => {
              //window.location = `/500.html`;
              //console.log('error');
          //});
		}  else {
			cursor = Cursor.from(data, onCursorChange);
			//console.log('INITIAL CURSOR');
			//console.log(cursor);
			initialData = {};
			render();
		}
		
	}

	getDataToRender();
});