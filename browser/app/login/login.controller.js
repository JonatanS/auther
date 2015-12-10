'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory) {
	$scope.loginSubmit = function () {
		console.log($scope.login.email);
		AuthFactory.login($scope.login.email, $scope.login.password);
	}
});