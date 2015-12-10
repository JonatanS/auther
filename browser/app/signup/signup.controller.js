'use strict';

app.controller('SignupCtrl', function ($scope) {
	$scope.signupSubmit = function () {
		console.log($scope.signup.email);
	}
});