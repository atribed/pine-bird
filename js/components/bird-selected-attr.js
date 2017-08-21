var React = require('react');

function BirdSelectedAttr(props) {
  var className = "button pb--margin-right-1 " +
      "pb--pos-relative pb--padding-left-0 pb_button--small" + props.className;

  return (
      <div onClick={props.birdAttrRemoved}
           className={className}
           data-attr-id={props.attrId}
           data-bird-attr={props.birdAttr}>
        <span className="selected-attr__text--capitalize pb--padding-left-2">{props.name}</span>
        <img src="/img/remove.svg" className="selected-attr__x-img pb--pos-absolute pb--absolute-center-vert"/>
      </div>
  );
}

module.exports = BirdSelectedAttr;
