(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('categories.items', {
        url: '/:categoryShortName',
        component: 'items',
        resolve: {
          categoryName: [
            'categories',
            'CategoryDataService',
            function (categories, CategoryDataService) {
              return categories[CategoryDataService.getCategoryID()].name;
            },
          ],
          items: [
            '$transition$',
            'categories',
            'MenuDataService',
            function ($transition$, categories, MenuDataService) {
              return MenuDataService.getItemsForCategory(
                $transition$.params('to').categoryShortName
              );
            },
          ],
        },
      });
    },
  ]);
})();
