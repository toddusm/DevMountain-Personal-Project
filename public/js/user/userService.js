var ehh = angular.module('ehh');

ehh.service('userService', function($http){
	this.getUser = function(id){
		return $http({
			method: "GET",
			url: 'http://localhost:8001/user/' + id
		}).then(function(data){
			// console.log('users', data)
			return data.data
		})
	}
	
	this.getSessionUser = function(){
		return $http({
			method: "GET",
			url: 'http://localhost:8001/sessionUser' 
		}).then(function(data){
			// console.log('users', data)
			return data.data
		})
	}
	
	
	this.updateUser = function(user){
		return $http({
			method: "PUT",
			url: 'http://localhost:8001/user/',
			data: user
		}).then(function(err, res){
			if(err){
				// console.log(err);
				return err
			} else {
				// console.log("updated", res);
				return res
			}
		})
	}
	
	//Messages
	this.createMessage = function(message, id){
		message.user = id
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
	
	this.getMessage = function(user){
		return $http({
			method: "GET",
			url: 'http://localhost:8001/message/' + user
		}).then(function(response){
			return(response.data)
		})
	}
	
	this.deleteMessage = function(messageId){
		return $http({
			method: "DELETE",
			url: 'http://localhost:8001/message/' + messageId
		})
	}
	
	//Replies
	this.createReply = function(convo, id, reply){
			console.log(convo, id, reply)
		return $http({
			method: "PUT",
			url: 'http://localhost:8001/message/' + id + '/conversation/' + convo,
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
	
	
});


