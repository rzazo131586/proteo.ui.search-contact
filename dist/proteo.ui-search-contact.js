require('./src/proteo.ui.search-contact');
module.exports = 'searchPerson';
angular.module("proteo.ui.search-contact", []).controller("searchContactCtrl",  function($scope) {
		console.log("that is of Controller");

		$scope.dataContact = {
			data : 'datasource',
			filterOptions : 'datafilter'
		};

}).directive("gridContact", function(){

	console.log("that is of Directive Grid");
	return {
		restrict: "AE",
		scope: {
			datatitle 		: '=datatitle',
			datasource 		: '=datasource',
			datafilter 		: '=datafilter',
			dataplaceholder : '=dataplaceholder'
		},
		controller : 'searchContactCtrl',
		//template: template
		templateUrl: './bower_components/proteo.ui.search-contact/src/proteo.ui.search-contact.tpl.html'
	};
	
});
angular.module("proteo.ui.search-contact", []).filter('searchContact-filter', function(){

}){;
angular.module("proteo.ui.search-contact", []){

});