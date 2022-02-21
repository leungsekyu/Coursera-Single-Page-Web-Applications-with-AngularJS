(function () {
  angular.module('MenuApp').component('items', {
    templateUrl: 'src/menuapp/template/items.template.html',
    bindings: {
      categoryName: '<',
      items: '<',
    },
  });
})();
