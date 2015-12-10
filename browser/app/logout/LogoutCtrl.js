'use strict';

app.controller('LogoutCtrl', function ($scope, AuthFactory) {
	$scope.logout = function () {
		console.log("Logout")
		AuthFactory.logout();
	}
});