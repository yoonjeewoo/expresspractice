var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');
router.get('/', function(req, res, next) {
  res.json(vd);
});

module.exports = router;
