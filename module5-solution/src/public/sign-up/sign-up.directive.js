(function () {
  'use strict';

  angular.module('public').directive('checkFavoriteDish', checkFavoriteDish);

  checkFavoriteDish.$inject = ['MenuService', '$q'];
  function checkFavoriteDish(MenuService, $q) {
    return {
      require: 'ngModel',
      link: function (scope, element, attributes, ngModelController) {
        ngModelController.$asyncValidators.checkFavoriteDish = function (
          modelValue,
          viewValue
        ) {
          var deferred = $q.defer();

          MenuService.getMenuItems().then(function (response) {
            // console.log(response.menu_items);

            for (var menuItem of response.menu_items) {
              if (menuItem.short_name === modelValue) {
                deferred.resolve();
                return deferred.promise;
              }
            }

            deferred.reject();
          });

          return deferred.promise;
        };
      },
    };
  }
})();
