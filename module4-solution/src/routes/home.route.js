(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('home', {
        url: '/',
        component: 'home',
      });
    },
  ]);
})();
