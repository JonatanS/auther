'use strict';

app.controller('SignupCtrl', function ($scope, AuthFactory) {
	$scope.signupSubmit = function () {
		AuthFactory.signup($scope.signup.email, $scope.signup.password);
		console.log($scope.signup.email);
	}

});