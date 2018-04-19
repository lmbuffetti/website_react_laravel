import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Menu from './app/components/Section/Menu';
import template from './template';
import Helmet from 'react-helmet'
import addRoutes from './routes';
var expressGoogleAnalytics = require('express-google-analytics');
var analytics = expressGoogleAnalytics('UA-109793465-1');

//Add to express before your routes

var compression = require('compression');
var robots = require('robots.txt');

const server = express();
server.get('*.js', function(req, res, next) {
	req.url = req.url + '.gz';
	res.setHeader("Cache-Control", "public, max-age=2592000");
	res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/javascript');
	next();
});

server.get('*.css', function(req, res, next) {
	req.url = req.url + '.gz';
	res.setHeader("Cache-Control", "public, max-age=2592000");
	res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/css');
	next();
});
server.get('*.jpg', function(req, res, next) {
	res.setHeader("Cache-Control", "public, max-age=2592000");
	res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
	next();
});
server.get('*.png', function(req, res, next) {
	res.setHeader("Cache-Control", "public, max-age=2592000");
	res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
	next();
});
server.use('/assets', express.static('assets'));
server.use('/dist', express.static('dist'));
server.use('/Img', express.static('Img'));
server.use('/db', express.static('db'));
server.use('/font', express.static('font'));
server.use(robots(__dirname + '/robots.txt'));

addRoutes(server);
server.use(compression());
server.use(analytics);
var port = Number(process.env.PORT || 5000);
server.use(function(req, res, next) {
	const { component, initialState } = res.locals;
	if (!component) {
		return next();
	}
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.format({
		'text/html': function() {
			const appString = renderToString(React.createElement(component, initialState));
			const menu = renderToString(<Menu {...initialState} />);
			const head = Helmet.renderStatic();
			const title = head.title;
			const meta = head.meta;
			const link = head.link;
			res.send(template({
				body: appString,
				menu:menu,
				title: title,
				meta:meta,
				url: fullUrl,
				initialState: JSON.stringify(initialState)
			}));
		},

		'application/json': function() {
			res.send(initialState);
		},
	});

	next();
});
server.listen(port, function() { console.log('Listening on port %d', port); });
