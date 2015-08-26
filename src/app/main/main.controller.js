(function() {
  'use strict';

  angular
    .module('angularReadingList')
    .controller('MainController', MainController);


	/** @ngInject */
	function MainController(booksList, genreType) {
		var vm = this;

		vm.books = booksList.getBooks();
		vm.genres = genreType.getGenres();

  	}
})();
