(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$urlRouterProvider',
    function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    },
  ]);
})();
