//Factory

app.factory('AuthFactory', function ($http, $location) {
	var AuthFactory = {};
	AuthFactory.login = function (email, password) {
		console.log("AUTH FACTORY:" + email);
		$http.get('auth/login/' + email + '/' + password)
		// $http({
		//      url: 'api/users/login',
		// 	  method: "GET",
		// 	  params: {email: email, password: password}
		//   })
		 .then(function(response){
		 	var user = response.data;
		 	AuthFactory.currentUser = user;
		 	//TODO: Render user page
		 	console.log('user' + JSON.stringify(user));
		 	$location.path('/users/' + user._id);
		 }, function (){
		 	alert('user does not exist. try again!');
		 });
	}

	AuthFactory.signup = function (email, password) {
		console.log('signing up '+ email);
		$http.post('auth/', {email: email, password: password})
		.then(function(response){
		 	var user = response.data;
		 	AuthFactory.currentUser = user;
		 	//TODO: Render user page
		 	console.log('new user' + JSON.stringify(user));
		 	$location.path('/users/' + user._id);
		 }, function (){
		 	alert('problem creating user!');
		 });
	}

	AuthFactory.logout = function () {
	$http.get('auth/logout')
	.then(function(response){
		AuthFactory.currentUser = null;
		$location.path('/');
	 }, function (){
	 	alert('problem logging out!');
	 });
}

	return AuthFactory;
})