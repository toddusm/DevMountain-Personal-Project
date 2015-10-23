var ehh = angular.module('ehh');

ehh.service('messageCenterService', function($http){
	
//Get Admin
this.getCurrentUser = function(id){
		return $http({
			method: "GET",
			url: 'http://localhost:8001/user/' + id
		}).then(function(data){
			// console.log('users', data)
			return data.data
		})
	}

// Messages
	this.getAllConvos = function(){
		return $http({
			method: "GET",
			url: '/convo/'
		}).then(function(res, err){
			if(err){
				console.log(err)
			} else {
				console.log("Get All Messages Admin Service", res)
				return res.data;
			}
		})
	}
	
	// Replies
		this.createReply = function(convoId, reply){
			console.log(convoId, reply)
		return $http({
			method: "PUT",
			url: '/convo/' + convoId,
			data: {
				reply: reply
			}
		}).then(function(res){
			console.log("Admin Service Reply", res);
			return res.data;
		}, function(err) {
			return;
		})
	}
})

