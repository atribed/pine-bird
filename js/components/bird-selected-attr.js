var React = require('react');

function BirdSelectedAttr(props) {
}
return (
    <div onClick={props.birdAttrRemoved}
         className="two columns button button-primary pb--margin-right-4-perc pb--margin-left-0 pb--pos-relative pb--padding-left-0"
         data-attr-id={props.attrId}
         data-bird-attr={props.birdAttr}>
      <span className="selected-attr__text pb--padding-left-2">{props.name}</span>
      <img src="/img/remove.svg" className="selected-attr__x-img pb--pos-absolute pb--absolute-center-vert" />
    </div>
);

module.exports = BirdSelectedAttr;
