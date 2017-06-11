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

    var birds = bird.fetchAll();
    var seasons = season.fetchAll();

    var color = descriptor.where('descriptor_type_id', '1').fetchAll();
    var size = descriptor.where('descriptor_type_id', '2').fetchAll();
    var call = descriptor.where('descriptor_type_id', '3').fetchAll();

    Promise.all([birds, seasons, color, size, call]).then(function(values) {
      data.birds = values[0];
      data.seasons = values[1];
      data.color = values[2];
      data.size = values[3];
      data.call = values[4];

      res.send(data);
    });
  }
}
