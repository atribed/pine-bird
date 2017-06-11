var bookshelf = require('../bookshelf');

var Descriptor = bookshelf.Model.extend({
  tableName: 'descriptor',
  birds: function() {
    return this.belongsToMany('Bird');
  }
});

module.exports = Descriptor;
