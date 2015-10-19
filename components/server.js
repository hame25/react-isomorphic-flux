import {compileFile as compileFile} from 'jade';
import {join as joinPath} from 'path';
import React from 'react';
import Router from 'react-router';
import routes from '../routes'
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import fetchData from '../utils/fetchData';
import config from '../config';
import fetch from 'isomorphic-fetch';
import url from 'url';

let layoutPath = joinPath(__dirname, 'layout.jade');
let layout = compileFile(layoutPath);

export default () => {
  return (req, res) => {

    let router = Router.create({
      routes: routes,
      location: req.url
    });

    let data;

    router.run((Handler, state) => {

        fetchData(state).then((data) => {
          //page specific data
          return data;
        }).then((data) => {
          //global data
          getGlobalData().then((appData) => {

            data.app = appData;
            data = Immutable.fromJS(data);
          
            let cursor = Cursor.from(data);

            let templateLocals = {
              "data": data
            };
          
            templateLocals.content = React.renderToString(
          
            <Handler cursor={cursor}/>
          );
          res.send(layout(templateLocals));
        });
      })
    });
  }
}

function getGlobalData() {
  return fetch(url.format(config.services.taxonomy))
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      data.search = {query: 'placeholder'};
      return data;
    });
}