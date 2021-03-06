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
				getConvos: function(userService, $route){
					return userService.getConvos($route.current.params.id)
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
				},
				getConvos: function(userService, $route){
					return {};				}
					
			}
		})
		.when('/admin/:id', {
			templateUrl: 'js/admin/adminTmpl.html',
			controller: 'adminCtrl',
			resolve: {
				getAdmin: function(loginService, $route, $location){
					return loginService.getCurrentUser($route.current.params.id).then(function(res){
						var currentUser = res
						return currentUser
						console.log(currentUser.value.admin)
						if(!currentUser || !currentUser.admin){
							$location.path('/')
					}
					})
					
							}
			}
		})
		.when('/admin/:id/message_center', {
			templateUrl: 'js/admin/messageCenterTmpl.html',
			controller: 'messageCenterCtrl',
			resolve: {
				getAdmin: function(loginService, $route, $location){
					return loginService.getCurrentUser($route.current.params.id).then(function(res){
						var currentUser = res
						console.log(currentUser.admin)
						if(!currentUser.admin){
							$location.path('/')
						}
						return currentUser
					})
					
							}
			}
		})
		.when('/resources', {
			templateUrl: 'js/resources/resourcesTmpl.html'
		})
		.when('/neighborhood', {
			templateUrl: 'js/neighborhood/neighborhoodTmpl.html',
			controller: 'neighborhoodCtrl'
		})
		.when('/aboutme', {
			templateUrl: 'js/home/aboutmeTmpl.html'
		})
		.when('/contact', {
			templateUrl: 'js/contact/contactMeTmpl.html',
			controller: 'contactMeCtrl'
		})
		.when('/comingsoon', {
			templateUrl: 'js/home/comingSoon.html'
		})
		.otherwise('/')
})