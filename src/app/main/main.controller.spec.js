(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('angularReadingList'));

    it('should define more than 3 books', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.books)).toBeTruthy();
      expect(vm.books.length > 3).toBeTruthy();
    }));
  });
})();
