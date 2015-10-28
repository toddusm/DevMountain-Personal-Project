var ehh = angular.module('ehh');

ehh.service('contactMeService', function($http){
	this.sendMail = function(email){
		console.log('email')
		return $http({
			method: 'POST',
			url: '/contactme',
			data: email
		}).then(function(res, err){
			if(err){
				console.log(err);
			} else {
				console.log(res)
				return res
			}
		})
	}
});