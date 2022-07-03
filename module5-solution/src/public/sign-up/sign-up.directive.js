(function () {
  'use strict';

  angular.module('public').directive('checkFavoriteDish', checkFavoriteDish);

  checkFavoriteDish.$inject = ['MenuService'];
  function checkFavoriteDish(MenuService) {
    return {
      require: 'ngModel',
      link: function (scope, element, attributes, ngModelController) {
        ngModelController.$asyncValidators.checkFavoriteDish = function (
          modelValue,
          viewValue
        ) {
          return MenuService.getMenuItem(modelValue);
        };
      },
    };
  }
})();
