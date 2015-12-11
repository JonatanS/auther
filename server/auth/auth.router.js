var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../utils/HttpError');
var User = require('../api/users/user.model');

// router.get('/me', function (req, res, next) {
// 	console.log("/me");
// 	User.findById(req.session.userId)
// 	.then( function (currentUser) {
// 		req.user = currentUser;
// 		res.send("hello Me");
// 	});
// });

router.get('/login/:email/:password', function (req, res, next) {
	console.log("You hit the route!")
	console.log("Email is ", req.params.email)
	User.findOne({email: req.params.email, password: req.params.password}).exec()
	.then(function (user) {
		console.log("Success handler logs ", user)
		req.session.userId = user._id;
		req.session.cookie.expires = new Date(Date.now() + 60000)
		res.json(user);
	}, function (error) {
		res.status(401).end();
	})
	.then(null, next);
});


router.get('/logout', function (req, res, next) {
	req.session.userId = null;
	res.status(200).end();
});

router.post('/', function (req, res, next) {
	console.log('creating user: ');
	console.log(req.body);
	User.create({email: req.body.email, password: req.body.password})
	.then(function (user) {
		res.status(201).json(user);
	})
	.then(null, next);
});


module.exports = router;