/**
 * Created by esko on 8/23/15.
 */
(function() {

	'use strict';

	angular
		.module('angularReadingList')
		.directive('reviewForm', reviewForm);

	function reviewForm(booksList) {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				genres: '=',
				books: '='
			},
			controller: function() {
				var vm = this;
				vm.showForm = false;
				vm.book = { genres: {} };
				vm.addReview = function (form) {
					booksList.setBooks(vm.book);
					toastr.success(vm.book.title, 'New Book Reviewed!');

					vm.book = { genres: {} };
					form.$setPristine();
				};
			},
			controllerAs: 'reviewFormCtrl',
			templateUrl: 'app/components/reviews/review-form.html'
		};
	}

})();
