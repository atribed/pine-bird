/**
 * The entities that make up what the app considers to be a bird.
 */

var bookshelf = require('../bookshelf');

var Bird = bookshelf.Model.extend({
  tableName: 'bird',
  seasons: function() {
    return this.belongsToMany('Season');
  },
  descriptors: function() {
    return this.belongsToMany('Descriptor');
  }
});

module.exports = Bird;
