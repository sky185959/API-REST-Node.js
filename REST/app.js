// dependecies
var express = require('express');
var bodyParser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

// express
var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// connection to mysql
var conn = connection.init();
// routes
routes.configure(app);

// start server
var server = app.listen(3000, function(){
  console.log('Api Listening on Port : ' + server.address().port);
});
