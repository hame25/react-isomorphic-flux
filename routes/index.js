import React from 'react';
import Router from 'react-router';
import App from '../components/app/';
import Home from '../components/home';
import PLP from '../components/plp';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
	<Route path="/" name="app" handler={App}>
    	<DefaultRoute name="home" handler={Home}/>
    	<Route name="plp" handler={PLP}/>
    	<Route name="page-3" handler={PLP}/>
    	<Route name="page-4" handler={PLP}/>
  	</Route>
)

export default routes;