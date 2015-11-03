angular.module("proteo.ui.search-contact", []).controller("searchContactCtrl",  function($scope) {
		console.log("that is of Controller");
		$scope.datafilter = {
			filterText : ''
		}
		$scope.dataContact = {
			data : 'datasource',
			filterOptions : $scope.datafilter
		};
}).directive("searchContact", function() {
	console.log("that is of Directive");

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
angular.module("proteo.ui.search-person", []).filter('searchContact-filter', function(){

}){;
angular.module("proteo.ui.search-person", []){

});