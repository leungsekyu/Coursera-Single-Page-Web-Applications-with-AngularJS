(function () {
  angular.module('MenuApp').component('categories', {
    templateUrl: 'src/menu/template/categories.template.html',
    controller: CategoriesComponentController,
    bindings: {
      categories: '<',
    },
  });
})();
