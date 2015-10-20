var ehh = angular.module('ehh', ['ngRoute'])

ehh.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html'
		})
		.when('/sign_up',{
			templateUrl: 'js/sign_up/signUpTmpl.html',
			controller: 'signUpCtrl'
		})
		.when('/login', {
			templateUrl: 'js/login/loginTmpl.html',
			controller: 'loginCtrl'
		})
		.when('/user/:id', {
			templateUrl: 'js/user/userTmpl.html',
			controller: 'userCtrl',
			resolve: {
				// getUserSession: function(),
				getUser: function(userService, $route){
					return userService.getUser($route.current.params.id)
				},
				getMessage: function(userService, $route){
					return userService.getMessage($route.current.params.id)
				}
			}
		})
		.when('/user/:id/update', {
			templateUrl: 'js/user/updateTmpl.html',
			controller: 'userCtrl',
			resolve: {
				// getUserSession: function(),
				getUser: function(userService, $route){
					return userService.getUser($route.current.params.id)
				}
			}
		})
		.when('/admin', {
			templateUrl: 'js/admin/adminTmpl.html',
			controller: 'adminCtrl',
			resolve: {
				getAdmin: function(loginService, $location){
					var currentUser = loginService.getCurrentUser();
					if(!currentUser || !currentUser.admin){
						$location.path('/')
					}
					
							}
			}
		})
		.otherwise(
			'/'
		)
})