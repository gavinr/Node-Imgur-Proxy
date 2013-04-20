/**
 * Node Imgur Proxy
 */

var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function() {
  app.set('port', process.env.VMC_APP_PORT || 9001);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

var appConfigure = function(req, res, next) {
	req.imgurClientId = 'xxx';
	next();
};

app.get('/:code', appConfigure, routes.index);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});