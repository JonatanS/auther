'use strict'; 

var router = require('express').Router();


// router.use(function (req, res, next) {
// 	if (!req.user || !req.session.userId) {
// 		res.redirect('/me')
// 	}
// 	console.log("going to next");
// 	next();
// });	

router.use(function (req, res, next) {
	var bodyString = '';
	req.on('data', function (chunk) {
		bodyString += chunk;
	});
	req.on('end', function () {
		bodyString = bodyString || '{}';
		req.body = eval('(' + bodyString + ')');
		next();
	});
});

module.exports = router;