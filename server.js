import { name } from './package.json';
import config from 'config';
import express from 'express';
import favicon from 'express-favicon';
import { join as joinPath } from 'path';
import router from './components/server';

let app = express()
			.use(express.static(joinPath(__dirname, 'public')))
			.use(favicon(__dirname + '/public/favicon.ico'))
			.use(router());

let server = app.listen(
  config.get('port'),
  config.get('host'),
  () => console.log(`${name} started ${JSON.stringify(server.address())}`)
);
    