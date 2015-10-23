var ehh = angular.module('ehh');

ehh.controller('userCtrl', function($scope, $location, userService, getUser, getConvos){
	$scope.user = getUser;
	console.log("$scope.user", $scope.user)
	$scope.convos = getConvos;
	$scope.updateUser = function(user){
		userService.updateUser(user)
	}
	
	//Converstaions
	
	$scope.createConvo = function(message){
		console.log("Message", message)
		userService.createConvo(message, $scope.user._id).then(function(createdConvo){
			console.log("createdMessage", createdConvo)
			$scope.convos.push(createdConvo);
		})
	}
	
	$scope.createReply = function(convoId, reply, index){
		console.log("Reply", reply)
		// $scope.messages[$index].conversations.reply.push(reply);
		reply.user = $scope.user._id;
		userService.createReply(convoId, reply)
		.then(function(createdReply){
			$scope.convos[index].messages.push(createdReply);
			// $scope.messages.conversations[$index].reply = createdReply.data.conversations[$index].reply;
			console.log("createdReply", createdReply)
		})
	}
	
	$scope.deleteMessage = function(convoId, index){
		userService.deleteMessage(convoId).then(function(){
			$scope.convos.splice(index, 1)
		})
	}
})