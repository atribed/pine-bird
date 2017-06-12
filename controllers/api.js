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

    var birds = bird.fetchAll({
      withRelated: [
        {descriptors: function(qb) {
          qb.column(['descriptor.id']);
        }},
        {seasons: function(qb) {
          qb.column(['season.id']);
        }}
      ]
    });

    var seasons = season.fetchAll();
    var descriptors = descriptor.fetchAll();

    Promise.all([birds, seasons, descriptors]).then(function(values) {

      var descriptors = {};
      var colorIds = [];
      var sizeIds = [];
      var callIds = [];

      var count = 0;

      // TODO: Need to clean this up, quick and dirty for now.
      values[2].forEach(function(descriptor) {
        switch(descriptor.get('descriptor_type_id')) {
          case 1:
            descriptors[descriptor.id] = descriptor;
            colorIds.push(descriptor.id);
            count++;
            break;
          case 2:
            descriptors[descriptor.id] = descriptor;
            sizeIds.push(descriptor.id);
            count++;
            break;
          case 3:
            descriptors[descriptor.id] = descriptor;
            callIds.push(descriptor.id);
            count++;
        }
      });

      var seasons = {};
      var seasonIds = [];
      values[1].forEach(function(season) {
        seasons[season.id] = season;
        seasonIds.push(season.id);
      });

      data.seasons = seasons;
      data.seasonIds = seasonIds;
      data.descriptors = descriptors;
      data.colorIds = colorIds;
      data.sizeIds = sizeIds;
      data.callIds = callIds;
      data.birds = values[0];

      res.send(data);
    });
  }
}
