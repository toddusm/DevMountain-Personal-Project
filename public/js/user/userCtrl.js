var ehh = angular.module('ehh');

ehh.controller('userCtrl', function($scope, $location, userService, getUser, getMessage){
	$scope.user = getUser;
	console.log("$scope.user", $scope.user)
	$scope.messages = getMessage;
	$scope.updateUser = function(user){
		userService.updateUser(user)
	}
	
	$scope.createMessage = function(message){
		console.log("Message", message)
		userService.createMessage(message, $scope.user._id).then(function(createdMessage){
			console.log("createdMessage", createdMessage.data)
			$scope.messages.push(createdMessage.data);
		})
	}
	
	$scope.createReply = function(convo, id, reply, $index){
		console.log("Reply", reply, 'id', id)
		// $scope.messages[$index].conversations.reply.push(reply);
		userService.createReply(convo, id, reply)
		.then(function(createdReply){
			$scope.messages[$index].conversations = createdReply.data.conversations;
			// $scope.messages.conversations[$index].reply = createdReply.data.conversations[$index].reply;
			console.log("createdReply", createdReply, $scope.messages[$index], $index)
		})
	}
	
	$scope.deleteMessage = function(){
		
	}
})