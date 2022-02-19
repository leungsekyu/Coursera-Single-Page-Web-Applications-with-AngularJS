(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('menuHome', {
        url: '/',
        templateUrl: 'src/routes/template/menuhome.template.html',
      });
    },
  ]);
})();
