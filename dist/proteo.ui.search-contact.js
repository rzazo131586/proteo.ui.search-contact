/* Todo Module */
angular.module("proteo.ui.search-contact", []).controller("searchContactCtrl",  function($scope) {
		console.log("that is of Controller");
})
/*.directive("gridContact", function(){
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
});*/
.directive("listContact", function(){
	console.log("that is listContact");
	return {
		restrict: "AE",
		scope: {
			datacontact : '=datacontact'
		},
		controller : 'searchContactCtrl',
		//template: template
		templateUrl: './bower_components/proteo.ui.search-contact/dist/proteo.ui.search-contact.tpl.html'
	};
});
/* Todo Filter */