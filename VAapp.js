var app =angular.module('VAapp',['VAapp.controllers','VAapp.services','ngRoute']);

app.config(['$routeProvider', 
	function($routeProvider) {
	  $routeProvider.
		when("/congress",{
				templateUrl: "partials/allCongress.html", 
				controller: "VAcontroller"
			}).
		when("/congress/:id",{
				templateUrl: "partials/congress.html", 
				controller: "detailController"
			}).
		otherwise({
			templateUrl: 'partials/allCongress.html'
			// controller:"VAcontroller"
	});
}]);