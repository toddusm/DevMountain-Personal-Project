var ehh = angular.module('ehh');

ehh.service('userService', function($http){
	this.getUser = function(id){
		return $http({
			method: "GET",
			url: '/user/' + id
		}).then(function(data){
			// console.log('users', data)
			return data.data
		})
	}
	
	this.getSessionUser = function(){
		return $http({
			method: "GET",
			url: '/sessionUser' 
		}).then(function(data){
			// console.log('users', data)
			return data.data
		})
	}
	
	
	this.updateUser = function(user){
		return $http({
			method: "PUT",
			url: '/user',
			data: user
		}).then(function(res, err){
			if(err){
				// console.log(err);
				return err
			} else {
				// console.log("updated", res);
				return res
			}
		})
	}
	
	//Converstaion
	this.createConvo = function(message, id){
		return $http({
			method: "POST",
			url: '/convo/' + id,
			data: {
				messages: [{text: message, user: id}],
				user: id
			}
		}).then(function(res, err){
			if(err){
				console.log(err);
				return(err);
			} else {
				console.log("Created Convo", res.data);
				return res.data;
			}
		})
	}
	
	this.getConvos = function(user){
		return $http({
			method: "GET",
			url: '/convo/' + user
		}).then(function(response){
			return response.data
		})
	}
	
	this.deleteMessage = function(convoId){
		return $http({
			method: "DELETE",
			url: '/convo/' + convoId
		})
	}
	
	//Replies
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
			return err;
		})
	}
	
	
});


