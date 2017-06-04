var express   = require('express');
var path      = require('path');
var bodyParser    = require('body-parser');
var errorhandler  = require('errorhandler');

var app = express();

// Setup views
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.set('layout', 'container.html');

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(errorhandler());

// Routing
var index = require('./routes/index');
app.use('/', index);

// Setup static path
app.use(express.static(path.join(__dirname + '/static')));

module.exports = app;
