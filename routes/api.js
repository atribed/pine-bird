/**
 * Router for our bird api.
 */

var express = require('express');
var router = express.Router();

var apiController = require('../controllers/api');

router.get('/all', apiController.getAllData);

module.exports = router;
