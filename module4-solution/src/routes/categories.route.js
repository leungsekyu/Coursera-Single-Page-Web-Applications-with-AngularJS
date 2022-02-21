(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('categories', {
        url: '/categories',
        component: 'categories',
        resolve: {
          categories: [
            'MenuDataService',
            function (MenuDataService) {
              return MenuDataService.getAllCategories();
            },
          ],
        },
      });
    },
  ]);
})();
