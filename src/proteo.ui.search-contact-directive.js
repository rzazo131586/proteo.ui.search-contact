angular.module("proteo.ui.search-contact", []).controller("searchContactCtrl",  function($scope) {
		console.log("that is of Controller");
		$scope.datafilter = {
			filterText : ''
		}
		$scope.dataContact = {
			data : 'datasource',
			filterOptions : $scope.datafilter
		};
}).directive("gridContact", function(){
	console.log("that is of Directive Grid");

	return {
		restrict: "AE",
		scope: {
			datatitle 		: '=datatitle',
			datasource 		: '=datasource',
			dataplaceholder : '=dataplaceholder'
		},
		controller : 'searchContactCtrl',
		//template: template
		templateUrl: './bower_components/proteo.ui.search-contact/src/proteo.ui.search-contact.tpl.html'
	};
});