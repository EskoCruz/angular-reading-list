/**
 * Created by esko on 8/19/15.
 */
(function() {

	'use strict';

	angular.module('angularReadingList')
		.service('genreType', genreType);

	function genreType() {
		var data = [
			'fable',
			'fantasy',
			'fiction',
			'folklore',
			'horror',
			'humor',
			'legend',
			'metafiction',
			'mystery',
			'mythology',
			'non-fiction',
			'poetry'
		];

		this.getGenres = getGenres;

		function getGenres() {
			return data;
		}
	}



})();
