var React = require('react');

function BirdAttrDropdown(props) {
  return (
      <div className="twelve columns">
        <label>{props.label}</label>
        <select className="u-full-width" onChange={props.handleChange} data-bird-attr={props.birdAttr} value="">
          <option disabled selected={true} value>Select a {props.label}...</option>
          {
            props.attributeIds.map(function(attributeId) {
              var disabled = props.activeDescriptors.indexOf(attributeId) > -1 ? 'disabled' : '';
              return (
                  <option disabled={disabled} value={attributeId} key={attributeId}>{props.attributes[attributeId].name}</option>
              );
            })
          }
        </select>
      </div>
  );
}

module.exports = BirdAttrDropdown;
