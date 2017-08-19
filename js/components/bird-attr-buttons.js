var React = require('react');

function BirdAttrButton(props) {
  var className = "four columns button " + props.bgColor;

  if (props.isSelected) {
    className += " pb--opacity-8";
  }

  return (
      <button className={className} value={props.id} onClick={props.handleClick} data-bird-attr={props.birdAttr}>
        <span>{props.name}</span>
      </button>
  );
}

module.exports = BirdAttrButton;
