var React     = require('react');
var ReactDOM  = require('react-dom');
var Container = require('./components/container');

// Fetch polyfill
require('whatwg-fetch');

var containerDiv = document.getElementById('pine-birds');

if (containerDiv) {
  ReactDOM.render(
      <Container />,
      containerDiv
  );
}
