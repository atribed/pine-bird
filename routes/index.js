/**
 * Router for index-ish routes.
 */

var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');

router.get('/', indexController.home);

module.exports = router;
