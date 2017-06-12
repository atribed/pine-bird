/**
 * The entities that make up what the app considers to be a bird.
 */

var bookshelf = require('../bookshelf');

// Required for registry
require('./descriptor');
require('./season');

var Bird = bookshelf.Model.extend({
  tableName: 'bird',
  seasons: function() {
    return this.belongsToMany('Season');
  },
  descriptors: function() {
    return this.belongsToMany('Descriptor');
  },
  outputVirtuals: true,
  virtuals: {
    descriptorIds: function() {
      return this.related('descriptors').map(function(descriptor) {
        return descriptor.id;
      });
    },
    seasonIds: function() {
      return this.related('seasons').map(function(season) {
        return season.id;
      });
    }
  }
});

module.exports = module.exports = bookshelf.model('Bird', Bird);
