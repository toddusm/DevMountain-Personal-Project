var ehh = angular.module('ehh');

ehh.service('neighborhoodService', function($http){
	this.getInfo = function(zip) {
				console.log('test')
	return $http({
		method: "GET",
		url: '/census/' + zip
	}).then(function(res, err){
		if(err){
			console.log(err)
			return err
		} else {
			res.data.shift();
			console.log(res.data)
			return(res.data)
		}
	})
}

})