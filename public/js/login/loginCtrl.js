var ehh = angular.module('ehh');

ehh.controller('loginCtrl', function($scope, loginService, $location){
	$scope.loginUser = function(user){
		console.log("Success")
		loginService.loginUser(user).then(function(resp) {
			if(resp.data.admin === true){
				$location.path('/admin')
			} else {
			$location.path('/user/' + resp.data._id) }
		}, function(err) {
			return err;
		});
	}
})