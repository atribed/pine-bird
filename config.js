var config = {};

// Web setup
config.webPort = process.env.WEB_PORT || 5000;

// Database setup (username and pw just stored as env vars)
config.dbHost = process.env.DB_HOST || '127.0.0.1';
config.db = 'pine_birds';
config.dbCharset = 'utf8';

module.exports = config;
