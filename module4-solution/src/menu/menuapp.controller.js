(function () {
  angular
    .module('MenuApp')
    .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['MenuCategoriesService'];
  function MenuCategoriesController(MenuCategoriesService) {
    var vm = this;

    vm.categories = [];

    vm.$onInit = function () {
      var promise = MenuCategoriesService.getCategories();
      promise
        .then(function (response) {
          vm.categories = response;
          console.log(vm.categories);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }
})();
