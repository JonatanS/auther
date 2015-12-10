'use strict';

app.controller('LoginCtrl', function ($scope) {
	$scope.loginSubmit = function () {
		console.log($scope.login.email);
	}
});