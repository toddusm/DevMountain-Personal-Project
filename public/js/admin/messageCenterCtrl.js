var ehh = angular.module('ehh');

ehh.controller('messageCenterCtrl', function($scope, messageCenterService, getAdmin){
	$scope.adminUser = getAdmin;
	console.log(getAdmin)
	// messageCenterService.getAllConvos().then(function(response){
	// 	console.log("Get All Messages", response.data)
	// 	$scope.convos = response.data
	// });
	
	// $scope.createReply = function(convo, id, reply, $index){
	// 	console.log("Reply", reply, 'id', id)
	// 	// $scope.messages[$index].conversations.reply.push(reply);
	// 	messageCenterService.createReply(convo, id, reply).then(function(createdReply){
	// 		$scope.messages[$index].conversations = createdReply.data.conversations;
	// 		// $scope.messages.conversations[$index].reply = createdReply.data.conversations[$index].reply;
	// 		console.log("createdReply", createdReply, $scope.messages[$index], $index)
	// 		messageCenterService.getAllMessages().then(function(response){
	// 		$scope.messages = response.data
	// })
	// 	})
	// }
	
	messageCenterService.getAllConvos().then(function(response){
		console.log("Get All Messages", response)
		$scope.convos = response
	});
	
	$scope.createReply = function(convoId, reply, index){
		console.log("convo_id", convoId)
		console.log("Reply", reply)
		// $scope.messages[$index].conversations.reply.push(reply);
		reply.user = $scope.adminUser._id
		messageCenterService.createReply(convoId, reply)
		.then(function(createdReply){
			$scope.convos[index].messages.push(createdReply);
			// $scope.messages.conversations[$index].reply = createdReply.data.conversations[$index].reply;
			console.log("createdReply", createdReply)
		})
	}
})