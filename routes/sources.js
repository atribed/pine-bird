/**
 * Router for source routes.
 */

var express = require('express');
var router = express.Router();

var sourcesController = require('../controllers/sources');

router.get('/', sourcesController.home);

module.exports = router;
