(function () {
  angular.module('MenuApp').component('categories', {
    templateUrl: 'src/menuapp/template/categories.template.html',
    bindings: {
      categories: '<',
    },
    controller: CategoriesComponentController,
  });
})();

CategoriesComponentController.$inject = ['CategoryDataService'];
function CategoriesComponentController(CategoryDataService) {
  var $ctrl = this;

  $ctrl.setCategoryID = function (categoryID) {
    CategoryDataService.setCategoryID(categoryID);
  };
}
