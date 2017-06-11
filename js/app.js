var React     = require('react');
var ReactDOM  = require('react-dom');
var Container = require('./components/container');

// Fetch polyfill
require('whatwg-fetch');

var containerDiv = document.getElementById('pine-birds');

if (containerDiv) {
  var birdData = {};

  // Render empty component
  ReactDOM.render(
      <Container data={birdData} />,
      containerDiv
  );

  // Render component with props once they come in
  fetch('/api/all', {
    method: 'GET'
  }).then(function(response) {
    return response.text();
  }).then(function(data) {
    birdData = window.JSON.parse(data);
    ReactDOM.render(
        <Container
            birds={birdData.birds}
            seasons={birdData.seasons}
            descriptors={birdData.descriptors}
        />,
        containerDiv
    );
  }).catch(function(err) {
    console.log(err);

    // TODO: Make this less annoying.
    alert("Sorry, we're experiencing some difficulties right now. Please try again later.");
  });
}
