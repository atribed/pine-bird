var bookshelf = require('../bookshelf');

require('./bird');

var Descriptor = bookshelf.Model.extend({
  tableName: 'descriptor',
  birds: function() {
    return this.belongsToMany('Bird');
  }
});

module.exports = bookshelf.model('Descriptor', Descriptor);
