var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require("cheerio");
/* GET home page. */
// var name = new Array();
// request({
// 	uri : "http://selab.hanyang.ac.kr/members/",
// }, function(error, response, body) {
//   var $ = cheerio.load(body);
//   $("#info .name").each(function() {
//   		name.push($(this).text());
//   });
// });
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Hello'
  });
});

module.exports = router;
