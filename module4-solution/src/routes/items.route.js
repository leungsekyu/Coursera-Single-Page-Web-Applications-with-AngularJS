(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('categories.items', {
        // url: '/{categoryID}',
        url: '/:categoryID',
        component: 'items',
        resolve: {
          categoryName: [
            '$stateParams',
            'categories',
            function ($stateParams, categories) {
              return categories[$stateParams.categoryID].name;
            },
          ],
          items: [
            '$stateParams',
            'categories',
            'MenuDataService',
            function ($stateParams, categories, MenuDataService) {
              return MenuDataService.getItemsForCategory(
                categories[$stateParams.categoryID].short_name
              );
            },
          ],
        },
      });
    },
  ]);
})();
