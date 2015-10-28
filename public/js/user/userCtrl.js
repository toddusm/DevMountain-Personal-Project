var ehh = angular.module('ehh');

ehh.controller('userCtrl', function($scope, $location, userService, getUser, getConvos){
	console.log('getConvos', getConvos)
	$scope.user = getUser;
	console.log("$scope.user", $scope.user)
	$scope.convos = 'None yet';
	if(getConvos.length >= 0) {
	$scope.convos = getConvos;
	}
	$scope.updateUser = function(user){
		userService.updateUser(user).then(function(res, err) {
			if(err) console.log(err);
			console.log(res);
		})
	}
	
	//Converstaions
	
	$scope.createConvo = function(message){
		console.log("Message", message)
		userService.createConvo(message, $scope.user._id).then(function(createdConvo){
			console.log("createdConvo", createdConvo)
			// $scope.convos.push(createdConvo);
			$scope.convos = createdConvo
			$scope.message = "";
		})
	}
	
	$scope.createReply = function(convoId, reply, index){
		console.log("Reply", reply)
		reply.user = $scope.user._id;
		userService.createReply(convoId, reply)
		.then(function(createdReply){
			$scope.convos[index].messages.push(createdReply);
			console.log("createdReply", createdReply)
			$scope.reply.text= "";
		})
	}
	
	$scope.deleteMessage = function(convoId, index){
		userService.deleteMessage(convoId).then(function(){
			$scope.convos.splice(index, 1)
		})
	}
})