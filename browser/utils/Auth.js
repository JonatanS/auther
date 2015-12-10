//Factory

app.factory('AuthFactory', function ($http) {
	var AuthFactory = {};
	AuthFactory.login = function (email, password) {
		console.log('email in auth:' + email);
		 $http.get('api/users/login', {email : email})
		 .then(function(response){

		 });
		}
		 // ({
			//   url: 'api/users/login',
			//   method: "GET",
			//   data: {email: email, password: password}
		 //  })
		 // .then(function (response) {
		 // 	//Returns a user
		 // 	console.log(response.data);
		 // })
	AuthFactory.signup = function (email, password) {
		$http({
			  url: '/create',
			  method: "POST",
			  data: {email: email, password: password}
		  })
		.then (function (response) {
			//Returns a user
			return response.data;
		})
	};

	return AuthFactory;
})