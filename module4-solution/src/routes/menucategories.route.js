(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('menuCategories', {
        url: '/categories',
        templateUrl: 'src/routes/template/menucategories.template.html',
        controller: 'MenuCategoriesController as menu',
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
