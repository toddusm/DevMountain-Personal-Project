var ehh = angular.module('ehh');

ehh.service('signUpService', function($http){
	this.createUser = function(user){
		console.log(user);
		return $http({
			method: "POST",
			url: '/user',
			data: user

		}).then(function(err, res){
			if(err){
				console.log(err);
				return(err);
			} else {
				console.log(res);
				return res;
			}
		})
	}
	
	
})