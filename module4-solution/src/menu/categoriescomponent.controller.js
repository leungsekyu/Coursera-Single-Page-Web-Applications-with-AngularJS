(function () {
  angular
    .module('MenuApp')
    .controller('CategoriesComponentController', CategoriesComponentController);

  function CategoriesComponentController() {
    var $ctrl = this;

    $ctrl.test = 'test';
  }
})();
