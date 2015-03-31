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
		when("/splash",{
				templateUrl: "partials/splash.html", 
				controller: "detailController"
			}).
		when("/about",{
				templateUrl: "partials/about.html", 
				controller: "detailController"
			}).
		when("/contact",{
				templateUrl: "partials/contact.html", 
				controller: "detailController"
			}).
		when("/demo",{
				templateUrl: "partials/demoReportCards.html", 
				controller: "detailController"
			}).		
		otherwise({
			templateUrl: 'partials/splash.html'
			// controller:"VAcontroller"
	});
}]);