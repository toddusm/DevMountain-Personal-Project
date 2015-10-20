var ehh = angular.module('ehh');

ehh.directive('header', function(){
	return {
		templateUrl: 'js/directive/headerTmpl.html'
	}
});

ehh.directive('customFooter', function(){
	return {
		templateUrl: 'js/directive/footerTmpl.html'
	}
});