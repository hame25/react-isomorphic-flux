import 'whatwg-fetch';
import React from 'react';
import Router from 'react-router';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor'
import routes from '../routes';

let cursor;

function clientBootstrap () {
	this.content = document.getElementById('content');

	// Create application centralised data - include this when we have some app data
	let data = JSON.parse(document.getElementById('initial-data').innerHTML);

	this.data = Immutable.fromJS(data);

	//create cursor
	this.cursor = Cursor.from(this.data, this.onChange.bind(this));
	//cursor = Cursor.from(this.data, this.onChange.bind(this));

	this.render();
}

clientBootstrap.prototype.onChange = function (newData) {
	this.data = newData
	//this.cursor = Cursor.from(this.data, this.onChange.bind(this));
	this.cursor = Cursor.from(this.data, this.onChange.bind(this));
	this.render();
}

// Start the client-side router using only `pushState`
// with the supplied routes
clientBootstrap.prototype.render = function () {
	let self = this;
	Router.run(routes, Router.HistoryLocation, function (Handler, req) {
    	//React.render(<Handler cursor = {self.cursor}/>, self.content);
    	React.render(<Handler cursor = {self.cursor}/>, self.content);
	});
} 

new clientBootstrap();