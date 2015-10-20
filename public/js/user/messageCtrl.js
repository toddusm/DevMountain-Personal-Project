var ehh = angular.module('ehh');

ehh.controller('messageCtrl', function($scope, messageService){
	$scope.createMessage = function(message){
		messageService.createMessage(message).then(function(createdMessage){
			console.log("createdMessage", createdMessage.data)
			$scope.messages.push(createdMessage.data);
		})
	}
	
	messageService.getMessage().then(function(response){
		console.log("Front End MessageCtrl", response)
		$scope.messages = response
	});
})