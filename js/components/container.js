var React = require('react');
var fetchival = require('fetchival');

function BirdAttributeDropdown(props) {
  return (
      <select>
        {
          props.attributes.map(function(attribute) {
            return (
                <option value={attribute.id} key={attribute.id}>{attribute.name}</option>
            );
          })
        }
      </select>
  );
}

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetchival('/api/all').get().then(function(json) {
      this.setState({
        seasons: json.seasons,
        birds: json.birds,
        birds: json.birds,
        size: json.size,
        color: json.color,
        call: json.call
      });
    }.bind(this));
  }

  render() {
    var seasons = this.state.seasons ? this.state.seasons : [];
    var birds = this.state.birds ? this.state.birds : [];
    var size = this.state.size ? this.state.size : [];
    var color = this.state.color ? this.state.color : [];
    var call = this.state.call ? this.state.call : [];

    return (
        <div>
          <BirdAttributeDropdown attributes={seasons} />
          <BirdAttributeDropdown attributes={birds} />
          <BirdAttributeDropdown attributes={size} />
          <BirdAttributeDropdown attributes={color} />
          <BirdAttributeDropdown attributes={call} />
        </div>
      );
  }
}

module.exports = Container;
