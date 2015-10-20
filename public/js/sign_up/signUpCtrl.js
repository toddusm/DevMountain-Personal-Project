var ehh = angular.module('ehh');

ehh.controller('signUpCtrl', function($scope, $location, signUpService){
	$scope.createUser = function(user){
		signUpService.createUser(user).then(function(resp) {
			$location.path('/user/' + resp.data._id)
		}, function(err) {
			return err;
		});
	}
})