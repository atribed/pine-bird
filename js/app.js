var React     = require('react');
var ReactDOM  = require('react-dom');

var Container = require('./components/container')

var containerDiv = document.getElementById('pine-birds');
ReactDOM.render(
  <Container />,
  containerDiv
);
