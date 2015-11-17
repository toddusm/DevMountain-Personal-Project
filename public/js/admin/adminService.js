var ehh = angular.module('ehh');

ehh.service("adminService", function($http){
	// Users
	this.getAllUsers = function(){
		return $http({
		method: "GET",
		url: '/user/'
	}).then(function(res, err){
		if(err){
			console.log(err)
		} else {
			console.log("adminService", res)
			return res
		}
		})
	}
	// Messages
	this.getAllMessages = function(){
		return $http({
			method: "GET",
			url: '/message/'
		}).then(function(res, err){
			if(err){
				console.log(err)
			} else {
				console.log("Get All Messages Admin Service", res)
				return res;
			}
		})
	}
	
	// Replies
		this.createReply = function(convo, id, reply){
			console.log(convo, id, reply)
		return $http({
			method: "PUT",
			url: '/message/' + id + '/conversation/' + convo,
			data: {
				reply: reply
			}
		}).then(function(res){
			console.log("Admin Service Reply", res);
			return res;
		}, function(err) {
			return;
		})
	}
})