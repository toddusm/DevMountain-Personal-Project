var ehh = angular.module('ehh');

ehh.controller("contactMeCtrl", function($scope, contactMeService){
	$scope.sendMail = function(email){
		contactMeService.sendMail(email).then(function(res){
			alert("Email Sent Thank You")
			$scope.email = {}
		})
	}
});