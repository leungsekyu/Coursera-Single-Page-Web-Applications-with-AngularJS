(function () {
  angular.module('MenuApp').component('navigation', {
    templateUrl: 'src/menuapp/template/navigation.template.html',
    controller: navigationComponentController,
    bindings: {
      isHomeActive: '<',
      isCategoriesActive: '<',
    },
  });
})();

function navigationComponentController() {
  this.$onInit = function () {
    if (this.isHomeActive) {
      this.classHome = 'nav-link active';
      this.ariaCurrentHome = 'page';
    } else {
      this.classHome = 'nav-link';
    }

    if (this.isCategoriesActive) {
      this.classCategories = 'nav-link active';
      this.ariaCurrentCategories = 'page';
    } else {
      this.classCategories = 'nav-link';
    }
  };
}
