var React = require('react');

function BirdFilterResult(props) {
  return (
      <div className="row">
        <div className="6 columns">
          <span className="pb--bold">{props.name}</span>, <span className="pb--italic">{props.scientificName}</span>
        </div>
        <div className="u-full-width">
          <p>{props.description}</p>
        </div>
      </div>
  );
}

module.exports = BirdFilterResult;
