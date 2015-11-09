var ehh = angular.module('ehh');

ehh.service('loginService', function($http){
	var currentUser = null;
	this.getCurrentUser = function(id){
		return $http({
			method: "GET",
			url: 'http://localhost:8001/user/' + id
		}).then(function(data){
			console.log('users', data)
			return data.data
		})
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