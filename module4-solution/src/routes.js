(function () {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
  function RoutesConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('menuHome', {
        url: '/',
        templateUrl: 'src/menu/template/menuhome.template.html',
      })

      .state('menuCategories', {
        url: '/categories',
        templateUrl: 'src/menu/template/menucategories.template.html',
        controller: 'MenuCategoriesController as vm',
      });
  }
})();
