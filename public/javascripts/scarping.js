var request = require('request');
var cheerio = require("cheerio");

request({
	uri : "http://selab.hanyang.ac.kr/members/",
}, function(error, response, body) {
  var $ = cheerio.load(body);
  $("#info .name").each(function() {
  		var name = $(this).text();
  		console.log(name+"\n");
  });
});