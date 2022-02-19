(function () {
  angular
    .module('MenuApp')
    .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['categories'];
  function MenuCategoriesController(categories) {
    var menu = this;

    menu.categories = categories;
  }

  // MenuCategoriesController.$inject = ['MenuDataService'];
  // function MenuCategoriesController(MenuDataService) {
  //   var menu = this;

  //   menu.categories = [];

  //   menu.$onInit = function () {
  //     var promise = MenuDataService.getAllCategories();
  //     promise
  //       .then(function (response) {
  //         menu.categories = response;
  //         console.log(menu.categories);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };
  // }
})();
