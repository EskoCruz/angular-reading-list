/**
 * Created by esko on 8/20/15.
 */
(function() {

	'use strict';

	angular
		.module('angularReadingList')
		.directive('bookGenres', bookGenres);

	function bookGenres(){
		return {
			restrict: 'E',
			templateUrl: 'app/components/genres/genres.html',
			scope: {
				genres: '='
			}
		};
	}

})();
