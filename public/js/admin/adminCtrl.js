var ehh = angular.module('ehh');

ehh.controller('adminCtrl', function($scope, adminService){
		
	adminService.getAllUsers().then(function(response){
		console.log("Front End AdminCtrl", response.data)
		$scope.users = response.data
	});
	
	adminService.getAllMessages().then(function(response){
		console.log("Get All Messages", response.data)
		$scope.messages = response.data
	});
	
	$scope.createReply = function(convo, id, reply, $index){
		console.log("Reply", reply, 'id', id)
		// $scope.messages[$index].conversations.reply.push(reply);
		adminService.createReply(convo, id, reply).then(function(createdReply){
			$scope.messages[$index].conversations = createdReply.data.conversations;
			// $scope.messages.conversations[$index].reply = createdReply.data.conversations[$index].reply;
			console.log("createdReply", createdReply, $scope.messages[$index], $index)
		})
	}
})