// Models
var bird        = require('../models/bird');
var descriptor  = require('../models/descriptor');
var season      = require('../models/season');

/**
 * Controller methods for the the api.
 * @type {Object}
 */
module.exports = {
  /**
   * Sends back bird data.
   * @param  {obj} req Request object
   * @param  {obj} res Response object
   */
  getAllData: function(req, res)  {
    var data = {};


    console.log(bird);
    var birds = bird.fetchAll();
    var seasons = season.fetchAll();
    var descriptors = descriptor.fetchAll();


    Promise.all([birds, seasons, descriptors]).then(function(values) {
      data.birds = values[0];
      data.seasons = values[1];
      data.descriptors = values[2];

      res.send(data);
    });
  }
}
