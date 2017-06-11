var config = require('./config');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : config.dbHost,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : config.db,
    charset  : config.dbCharset
  }
});

var bookshelf = require('bookshelf')(knex);

// Helps with circular dependencies when requiring models for relationships
bookshelf.plugin('registry');

module.exports = bookshelf;
