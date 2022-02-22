(function () {
  angular.module('MenuApp').component('navigation', {
    templateUrl: 'src/menuapp/template/navigation.template.html',
    controller: 'NavigationComponentController',
    bindings: {
      isHomeActive: '<',
      isCategoriesActive: '<',
    },
  });
})();
