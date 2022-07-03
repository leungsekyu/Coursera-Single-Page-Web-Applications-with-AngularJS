(function () {
  'use strict';

  angular.module('public').service('RedirectorService', RedirectorService);

  RedirectorService.$inject = ['$state', 'UserService'];
  function RedirectorService($state, UserService) {
    var service = this;

    service.onStateChangeStart = function (
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {
      if (
        toState.name.indexOf('public.myInfo') === 0 &&
        !UserService.isAuthenticated()
      ) {
        event.preventDefault();
        $state.go('public.unauthenticated');
      }
    };
  }
})();
