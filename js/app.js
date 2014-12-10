'use strict';
(function() {
	var app = angular.module('feedbackForm', [])

	.controller('DefaultController', function($scope){

		$scope.val = {
			'text_button': 'Please let us know what you think about us',
			'toggle_popup': false
		};

		$scope.toggle_show_popup = function(){
			return $scope.val.toggle_popup = !$scope.val.toggle_popup;
		};

	})

	.directive('popUp', [function(){
		return {
			controller: function($scope){
				$scope.text = {
					'placeholder_email': 'Email',
					'placeholder_age': 'Your age',
					'placeholder_comment': 'Your comment',
					'text_button': 'Send us your feedback',
					'error_email': 'Please enter valid e-mail',
					'error_age': 'Please enter valid age',
					'error_age_number': 'Value should be number',
					'error_comment': 'Please provide us your feedback'
				};
			},
			restrict: 'A',
			templateUrl: 'view/form.html'
		};
	}]);

})();