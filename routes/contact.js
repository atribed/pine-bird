/**
 * Router for source routes.
 */

var express = require('express');
var router = express.Router();

var contactController = require('../controllers/contact');

router.get('/', contactController.home);

module.exports = router;
