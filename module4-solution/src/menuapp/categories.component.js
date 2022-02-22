(function () {
  angular.module('MenuApp').component('categories', {
    templateUrl: 'src/menuapp/template/categories.template.html',
    controller: 'CategoriesComponentController',
    bindings: {
      categories: '<',
    },
  });
})();
