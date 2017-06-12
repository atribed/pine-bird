var React = require('react');
var fetchival = require('fetchival');
var BirdAttrDropdown = require('./bird-attr-dropdown');
var BirdFilterResult = require('./bird-filter-result');
var BirdSelectedAttr = require('./bird-selected-attr');

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
      seasons: {},
      descriptors: {},
      birds: [],
      sizeIds: [],
      colorIds: [],
      callIds: [],
      seasonIds: [],
      activeSeasons: [],
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
        seasons: json.seasons,
        descriptors: json.descriptors,
        activeSeasons: [],
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

    if (this.state.activeDescriptors.length || this.state.activeSeasons.length) {
      this.state.birds.forEach(function(bird) {
        if (!this.state.activeDescriptors.every(function(id) {return bird.descriptorIds.indexOf(id) > -1})) {
          return;
        }

        if (!this.state.activeSeasons.every(function(id) {return bird.seasonIds.indexOf(id) > -1})) {
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

    var selectedSeasons = '';
    var selectedDescriptors = '';
    var filteredBirdComponents = '';

    if (this.state.activeSeasons.length) {
      selectedSeasons = <div className="row">
        <h4>Selected Seasons</h4>
        {
          this.state.activeSeasons.map(function(season) {
            return <BirdSelectedAttr
                key={season}
                name={season}
                attrId={season}
                birdAttrRemoved={this.birdAttrRemoved.bind(this)}
                birdAttr="activeSeasons" />
          }, this)
        }
      </div>
    }

    if (this.state.activeDescriptors.length) {
      selectedDescriptors = <div className="row">
        <h4>Selected Bird Attributes</h4>
        {
          this.state.activeDescriptors.map(function(descriptorId) {
            return <BirdSelectedAttr
                key={descriptorId}
                name={this.state.descriptors[descriptorId].name}
                attrId={descriptorId}
                birdAttrRemoved={this.birdAttrRemoved.bind(this)}
                birdAttr="activeDescriptors" />
          }, this)
        }
      </div>
    }

    if (filteredBirds.length) {
      filteredBirdComponents = <div className="row">
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
                attributes={this.state.seasons}
                label="Season"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeSeasons" />

            <BirdAttrDropdown
                attributeIds={this.state.sizeIds}
                attributes={this.state.descriptors}
                label="Size"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeDescriptors" />

            <BirdAttrDropdown
                attributeIds={this.state.colorIds}
                attributes={this.state.descriptors}
                label="Colors"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeDescriptors" />

            <BirdAttrDropdown
                attributeIds={this.state.callIds}
                attributes={this.state.descriptors}
                label="Call"
                handleChange={this.birdAttrSelected.bind(this)}
                birdAttr="activeDescriptors" />

          </div>

          {selectedDescriptors}

          {selectedSeasons}

          {filteredBirdComponents}

        </div>
      );
  }
}

module.exports = Container;
