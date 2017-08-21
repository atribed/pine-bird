var React = require('react');
var _     = require('underscore');
var BirdSelectedAttr = require('./bird-selected-attr');

function _groupDescriptorAttributes(activeDescriptors, descriptors, removeCallback) {
  console.log(removeCallback, 'removeCallback');
  return _.reduce(activeDescriptors, function(memo, item) {
    var descriptor = descriptors[item];
    var memoItem = memo[descriptor.descriptor_type_id];

    var birdSelectedAttr = <BirdSelectedAttr
        key={descriptor.id}
        name={descriptor.name}
        attrId={descriptor.id}
        birdAttrRemoved={removeCallback}
        birdAttr="activeDescriptors"
        className="" />;

    if (memoItem) {
      memo[descriptors[item].descriptor_type_id].push(birdSelectedAttr);
    } else {
      memo[descriptors[item].descriptor_type_id] = [birdSelectedAttr];
    }

    return memo;
  }, {});
}

function _buildDescriptionPhrase(groupId) {
  var phrase = {};
  switch(parseInt(groupId, 10)) {
    case 1:
      phrase.prefix = 'You saw a ';
      phrase.suffix = ' bird.';
      break;
    case 2:
      phrase.prefix = 'The bird was ';
      phrase.suffix = '.';
      break;
    case 3:
      phrase.prefix = 'It sounded like ';
      phrase.suffix = '.';
      break;
    case 4:
      phrase.prefix = 'The bird hangs around around during the ';
      phrase.suffix = '.';
      break;
    default:
      phrase.prefix = 'You saw a ';
      phrase.suffix = ' bird.';
  }

  return phrase;
}

function BirdPhrase(props) {
  var phrase = _buildDescriptionPhrase(props.groupId);
  return (
    <div className="pb--inline-block">
      <span className="pb--inline-block pb--margin-right-1">
        {phrase.prefix}
      </span>
        {props.descriptors}
      <span className="pb--inline-block pb--margin-right-1">
        {phrase.suffix}
      </span>
    </div>
  );
}

function BirdDescription(props) {
  var groupedActiveDescriptors = _groupDescriptorAttributes(props.activeDescriptors, props.descriptors, props.removeCallback);

  return (
      <div className="pb--width-full">
        {
          _.map(groupedActiveDescriptors, function(descriptors, index) {
            return <BirdPhrase descriptors={descriptors} groupId={index} key={index} />
          })
        }
      </div>
  );
}

module.exports = BirdDescription;
