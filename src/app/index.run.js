(function() {
  'use strict';

  angular
    .module('angularReadingList')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
