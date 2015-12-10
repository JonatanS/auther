'use strict';

app.controller('SignupCtrl', function ($scope, AuthFactory) {
	$scope.signupSubmit = function () {
		AuthFactory.signup();
		console.log($scope.signup.email);
	}

});