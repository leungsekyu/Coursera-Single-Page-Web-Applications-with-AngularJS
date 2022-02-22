(function () {
  angular
    .module('MenuApp')
    .controller('CategoriesComponentController', CategoriesComponentController);

  CategoriesComponentController.$inject = ['CategoryDataService'];
  function CategoriesComponentController(CategoryDataService) {
    var $ctrl = this;

    $ctrl.setCategoryID = function (categoryID) {
      CategoryDataService.setCategoryID(categoryID);
    };
  }
})();
