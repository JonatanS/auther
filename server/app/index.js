'use strict';

var app = require('express')();
var path = require('path');
var session = require('express-session');
var passport = require('passport');

app.use(session({
    // this mandatory configuration ensures that session IDs are not predictable
    secret: 'tongiscool'
}));

app.use(function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  //console.log('counter', ++req.session.counter);
  next();
});

app.use(function (req, res, next) {
	//this will be set in the login route
	if (req.session.userId) {
		console.log("current user:", req.session.userId);
	}
	next();
});

//passport should be declared after express sessions middleware
app.use(passport.initialize());
app.use(passport.session());

//use google strategy for authentication and login 
app.get('/auth/google', passport.authenticate('google', { scope : 'email' }));

// handle the callback after google has authenticated the user
app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect : '/home',
    failureRedirect : '/'
  }));

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
    new GoogleStrategy({
        clientID: 'YOUR_APP_ID',
        clientSecret: 'YOUR_APP_SECRET',
        callbackURL: 'YOUR_CALLBACK_URL'
    },
    // google will send back the token and profile
    function (token, refreshToken, profile, done) {
        //the callback will pass back user profilie information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
        /*
        --- fill this part in ---
        */
    })
);

app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));
app.use('/auth', require('../auth/auth.router'));


var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});

app.use(require('./error.middleware'));

module.exports = app;

