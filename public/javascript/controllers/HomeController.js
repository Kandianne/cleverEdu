(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$http'];

	function HomeController($http) {
		var vm = this;
		vm.title = 'Clever Edu';



		window.clever = function(user, pass){
			if( typeof user === 'string' && typeof pass === 'string' ){
				var api = new Api();
				api.username = user;
				api.password = pass;
				return api;
			}else{
				throw new Error('Username or password missing or not strings.');
			}
		}


		var Api = function(data){
			
			$http.get("https://api.getclever.com/v1.1", data).success(function(data) {

				
				apply(self, arguments);

			});
		}



		var client = clever('DEMO_APIKEY','');
		$http.get('/sections', function(sections, status, xhr){
			var students_total = 0;
			sections.data.forEach(function(item, index){
				students_total += item.data.students.length;
			});
			console.log( 'Average number of students in', sections.data.length, 'sections:', students_total / sections.data.length );
		});



	}
})();