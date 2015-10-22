var ehh = angular.module('ehh');

ehh.controller('messageCenterCtrl', function($scope, messageCenterService, getAdmin){
	console.log(getAdmin)
	messageCenterService.getAllMessages().then(function(response){
		console.log("Get All Messages", response.data)
		$scope.messages = response.data
	});
	
	$scope.createReply = function(convo, id, reply, $index){
		console.log("Reply", reply, 'id', id)
		// $scope.messages[$index].conversations.reply.push(reply);
		messageCenterService.createReply(convo, id, reply).then(function(createdReply){
			$scope.messages[$index].conversations = createdReply.data.conversations;
			// $scope.messages.conversations[$index].reply = createdReply.data.conversations[$index].reply;
			console.log("createdReply", createdReply, $scope.messages[$index], $index)
			messageCenterService.getAllMessages().then(function(response){
			$scope.messages = response.data
	})
		})
	}
})