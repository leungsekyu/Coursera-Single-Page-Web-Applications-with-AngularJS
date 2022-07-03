(function () {
  'use strict';
  /**
   * Public restaurant application. Includes the common module and ui-router.
   */
  angular.module('public', ['ui.router', 'common', 'ngMessages']).run(run);

  run.$inject = ['$rootScope', 'RedirectorService'];
  function run($rootScope, RedirectorService) {
    // Apply auth rules when state changes
    $rootScope.$on('$stateChangeStart', RedirectorService.onStateChangeStart);
  }
})();
