var React = require('react');
var fetchival = require('fetchival');
var BirdAttrDropdown = require('./bird-attr-dropdown');
var BirdFilterResult = require('./bird-filter-result');
var BirdSummary      = require('./bird-description');

/**
 * Container component to house the logic and call all the child components.
 */
class Container extends React.Component {

  /**
   * Let's get this started.
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      descriptors: {},
      birds: [],
      sizeIds: [],
      colorIds: [],
      callIds: [],
      seasonIds: [],
      activeDescriptors: []
    };
  }

  /**
   * Updates the state once the component mounts for a seemingly fast experience.
   */
  componentDidMount() {
    fetchival('/api/all').get().then(function(json) {
      this.setState({
        birds: json.birds,
        sizeIds: json.sizeIds,
        colorIds: json.colorIds,
        callIds: json.callIds,
        seasonIds: json.seasonIds,
        descriptors: json.descriptors,
        activeDescriptors: []
      });
    }.bind(this));
  }

  /**
   * Removes bird attributes from active attributes.
   * @param event
   */
  birdAttrRemoved(event) {
    var attrId = parseInt(event.currentTarget.dataset['attrId'], 10);
    var attr = event.currentTarget.dataset['birdAttr'];
    var attrs = this.state[attr].slice(0); // Clone array

    var attrIndex = attrs.indexOf(attrId);
    var updatedState = {};

    if (attrIndex > -1) {
      attrs.splice(attrIndex, 1);
    }

    updatedState[attr] = attrs;

    this.setState(updatedState);
  }

  /**
   * Takes an event and updates the state when a bird attribute is selected (season or descriptor).
   * @param event Event object
   */
  birdAttrSelected(event) {
    var attrId = parseInt(event.target.value, 10); // Get attribtue ID value
    var attr = event.target.dataset['birdAttr']; // Get whether it's a season or descriptor
    var attrs = this.state[attr].slice(0); // Clone array

    attrs.push(attrId);
    var uniqueAttrs = [...new Set(attrs)]; // Remove duplicates

    var updatedState = {};
    updatedState[attr] = uniqueAttrs;

    this.setState(updatedState);
  }

  /**
   * Filters birds that match only the seasons and descriptors.
   * Don't need to keep state of filtered birds since it can be calculated.
   * @returns {Array} Bird object.
   */
  filterBirds() {
    var birds = [];

    if (this.state.activeDescriptors.length) {
      this.state.birds.forEach(function(bird) {
        if (!this.state.activeDescriptors.every(function(id) {return bird.descriptorIds.indexOf(id) > -1})) {
          return;
        }

        birds.push(bird);
      }, this);
    }

    return birds;
  }

  /**
   * Renders the container component.
   * @returns {XML}
   */
  render() {
    var filteredBirds = this.filterBirds();
    var filteredBirdComponents = '';
    var birdSummary = '';

    if (this.state.activeDescriptors.length) {
      birdSummary = <div>
          <h4>Your Bird Summary</h4>
        <BirdSummary
            activeDescriptors={this.state.activeDescriptors}
            descriptors={this.state.descriptors}
            removeCallback={this.birdAttrRemoved.bind(this)}

        />
      </div>
    }

    if (filteredBirds.length) {
      filteredBirdComponents = <div className="row pb--margin-top-4">
        <h4>Some Likely Birds</h4>
        {
          filteredBirds.map(function(bird) {
            return <BirdFilterResult
                name={bird.name}
                scientificName={bird.scientific_name}
                description={bird.description}
                key={bird.id} />
          })
        }
      </div>
    }

    return (
        <div>
          <div className="row">
            <h4>What'd You See?</h4>

            <BirdAttrDropdown
                attributeIds={this.state.seasonIds}
                attributes={this.state.descriptors}
                activeDescriptors={this.state.activeDescriptors}
                label="Seasons"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeDescriptors" />

            <BirdAttrDropdown
                attributeIds={this.state.sizeIds}
                attributes={this.state.descriptors}
                activeDescriptors={this.state.activeDescriptors}
                label="Size"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeDescriptors" />

            <BirdAttrDropdown
                attributeIds={this.state.colorIds}
                attributes={this.state.descriptors}
                activeDescriptors={this.state.activeDescriptors}
                label="Colors"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeDescriptors" />

            <BirdAttrDropdown
                attributeIds={this.state.callIds}
                attributes={this.state.descriptors}
                activeDescriptors={this.state.activeDescriptors}
                label="Call"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeDescriptors" />

          </div>

          {birdSummary}

          {filteredBirdComponents}

        </div>
      );
  }
}

module.exports = Container;
