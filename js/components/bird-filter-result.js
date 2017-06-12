var React = require('react');

function BirdFilterResult(props) {
  return (
      <div className="row">
        <div className="6 columns">
          <span>{props.name}</span>, <span>{props.scientificName}</span>
        </div>
        <div className="u-full-width">
          <p>{props.description}</p>
        </div>
      </div>
  );
}

module.exports = BirdFilterResult;
