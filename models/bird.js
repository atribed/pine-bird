/**
 * The entities that make up what the app considers to be a bird.
 */

var bookshelf = require('../bookshelf');

var Season = bookshelf.Model.extend({
  tableName: 'season',
  birds: function() {
    return this.belongsToMany(Bird);
  }
});

var Descriptor = bookshelf.Model.extend({
  tableName: 'descriptor',
  birds: function() {
    return this.belongsToMany(Bird);
  },
  descriptor: function() {
    return this.belongsTo(Descriptor);
  }
});

var DescriptorType = bookshelf.Model.extend({
  tableName: 'descriptor_type',
  descriptors: function() {
    return this.hasMany(Descriptor);
  }
});

var Bird = bookshelf.Model.extend({
  tableName: 'bird',
  seasons: function() {
    return this.belongsToMany(Season);
  },
  descriptors: function() {
    return this.belongsToMany(Descriptor);
  }
});

module.exports = Bird;
