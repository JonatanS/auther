'use strict';

var app = angular.module('auther', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	//Instead of attempting to resolve '/auth/provider/' 
	//as some kind of state, the browser will send that route as a request to the server
	$urlRouterProvider.when('/auth/:provider', function () {
    window.location.reload();

	$urlRouterProvider.otherwise('/');
});

});