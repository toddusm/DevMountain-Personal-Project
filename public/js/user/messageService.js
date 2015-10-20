var ehh = angular.module('ehh');

ehh.service('messageService', function($http){
	this.createMessage = function(message){
		message.user = "561c227ca29e19ceec69caac"
		return $http({
			method: "POST",
			url: 'http://localhost:8001/message',
			data: message
		}).then(function(res, err){
			if(err){
				console.log(err);
				return(err);
			} else {
				console.log(res);
				return res;
			}
		})
	}
	
	this.getMessage = function(message){
		var user = "561c227ca29e19ceec69caac";
		return $http({
			method: "GET",
			url: 'http://localhost:8001/message/' + user
		}).then(function(response){
			return(response.data)
		})
	}
	
})