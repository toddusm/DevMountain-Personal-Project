var ehh = angular.module('ehh');

ehh.controller('neighborhoodCtrl', function($scope, neighborhoodService){
	console.log('test')
	$scope.getInfo = function(zip){
		$scope.results = !$scope.results
		console.log('test')
		neighborhoodService.getInfo(zip).then(function(res){
			$scope.cities = res;
		});
	}
})