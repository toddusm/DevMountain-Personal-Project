var ehh = angular.module('ehh');

ehh.service('loginService', function($http){
	var currentUser = null;
	this.getCurrentUser = function(){
		return currentUser;
	}
	
	this.logout = function(){
		currentUser = null;
	}
	
	this.loginUser = function(user){
		return $http({
			method: "POST",
			url: 'http://localhost:8001/login',
			data: user
		}).then(function(res, err){
			if(err){
				console.log(err);
				return(err);
			} else {
				console.log(res);
				currentUser = res.data;
				return res;
			}
		})
	}
})