/**
 * Created by esko on 8/21/15.
 */
(function() {

	'use strict';

	angular
		.module('angularReadingList')
		.directive('bookCover', bookCover);

	function bookCover() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/cover/cover.html',
			replace: true,
			scope: {
				book: '='
			}
		};
	}

})();
