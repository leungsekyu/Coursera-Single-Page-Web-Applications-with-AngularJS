(function () {
  angular.module('MenuApp').component('categories', {
    templateUrl: 'src/menuapp/template/categories.template.html',
    bindings: {
      categories: '<',
    },
  });
})();
