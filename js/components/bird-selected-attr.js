var React = require('react');

function BirdSelectedAttr(props) {
  return (
    <div className="two columns button button-primary" onClick={props.birdAttrRemoved} data-attr-id={props.attrId} data-bird-attr={props.birdAttr} key={props.attrId}>
      {props.name}
      <img src="/img/remove.svg" />
    </div>
  );
}

module.exports = BirdSelectedAttr;
