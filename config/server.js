/**
 * @module server
 * @file local server to serve mock data
 * @type {*|exports|module.exports}
 */
var express = require('express');
var path = require('path');
var conf = require('./build.conf.js');

var app = express();
var __data = __dirname + '/data/';
var port = 8100;

// set static content path
var contentDir = path.join(path.dirname(__dirname), '/' + conf.dir.build);
app.use(require('connect-livereload')());
app.use(require('serve-static')(contentDir));

/**
 * middleware executed for every request
 */
app.use(function(req, res, next) {
  // enable cors
  res.header('Access-Control-Allow-Origin', '*');
  // allow headers
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // continue matching subsequent routes
  next();
});

/**
 * @description signIn route
 */
app.get('/users', function(req, res) {
  var response = require(__data + 'users.json');
  res.status(200).json(response);
});

/**
 * @description signIn route
 */
app.post('/account/signIn', function(req, res) {
  var response = {
    access_token: 'zew230ojafjlkjc2349dfafdf00ljlj00nnnVVVawe',
    token_type: 'bearer',
    expires_in: 1199
  };

  res.status(200).json(response);
});

/**
 * @description signUp route
 */
app.post('/account/signUp', function(req, res) {
  var response = {
    message: 'User Registered!'
  };

  res.status(200).json(response);
});

/**
 * @description error handler
 */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

/**
 * start server
 */
var server = app.listen(port, onStart);

/**
 * @method onStart
 * @description on server start
 */
function onStart() {
  var port = server.address().port;
  console.log('Express server listening on port:%s', port);
  console.log('Serving from:%s', contentDir);
}

/**
 * @method gracefulShutdown
 * @description handles server being killed
 *  currently in testing
 */
function gracefulShutdown() {
  console.log('Received kill signal, shutting down node server');

  server.close(function() {
    console.log('Closed connections');
    process.exit();
  });

  // if after
  setTimeout(function() {
    console.error('Could not close connections, forcing shutdown');
    process.exit();
  }, 10 * 1000);
}

/**
 * @description callback on Control + C
 */
process.on('SIGINT', gracefulShutdown);
