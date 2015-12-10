//Factory

app.factory('AuthFactory', function ($http, $location) {
	var AuthFactory = {};
	AuthFactory.login = function (email, password) {
		console.log("AUTH FACTORY:" + email);
		$http.get('api/users/login/' + email + '/' + password)
		// $http({
		//      url: 'api/users/login',
		// 	  method: "GET",
		// 	  params: {email: email, password: password}
		//   })
		 .then(function(response){
		 	var user = response.data;
		 	//TODO: Render user page
		 	console.log('user' + JSON.stringify(user));
		 	$location.path('/users/' + user._id);
		 }, function (){
		 	alert('user does not exist. try again!');
		 });
	}
		 
			 //     url: 'api/users/login',
			 //  method: "GET",
			 //  data: {email: email, password: password}
		  // })
		 // .then(function (response) {
		 // 	//Returns a user
		 // 	console.log(response.data);
		 // })
	AuthFactory.signup = function (email, password) {
		console.log('signing up '+ email);
		$http.post('api/users', {email: email, password: password})
		.then(function(response){
		 	var user = response.data;
		 	//TODO: Render user page
		 	console.log('new user' + JSON.stringify(user));
		 	$location.path('/users/' + user._id);
		 }, function (){
		 	alert('problem creating user!');
		 });
	}

	return AuthFactory;
})