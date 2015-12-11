'use strict'; 

var router = require('express').Router();

router.use(function (req, res, next) {
	console.log("LOGGING USER AND SESSION BELOW WHEN LOGGED IN:")
	if (req.user) {
  		console.log('USER: ', JSON.stringify(req.user));
  		console.log('SESSION: ', JSON.stringify(req.session));
	}
  	next();
});

module.exports = router;