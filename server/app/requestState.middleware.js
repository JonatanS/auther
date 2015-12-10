'use strict'; 

var router = require('express').Router();

router.use(function (req, res, next) {
	var bodyString = '';
	req.on('data', function (chunk) {
		console.log('chunk: ',chunk);
		bodyString += chunk;
		console.log('bString: ', bodyString);
	});
	req.on('end', function () {
		bodyString = bodyString || '{}';
		req.body = eval('(' + bodyString + ')');
		next();
	});
});

module.exports = router;