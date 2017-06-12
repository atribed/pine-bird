/**
 * The entities that make up what the app considers to be a bird.
 */

var bookshelf = require('../bookshelf');

require('./bird');

var Season = bookshelf.Model.extend({
  tableName: 'season',
  birds: function() {
    return this.belongsToMany('Bird');
  }
});

module.exports = module.exports = bookshelf.model('Season', Season);
