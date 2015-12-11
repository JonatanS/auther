app.controller('NavbarCtrl', function ($scope, AuthFactory) {
	$scope.user = function() {
		if (AuthFactory.currentUser) return true;
		return false;
	}
});