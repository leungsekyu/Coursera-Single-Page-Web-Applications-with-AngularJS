(function () {
  angular.module('MenuApp').component('navigation', {
    templateUrl: 'src/menuapp/template/navigation.template.html',
    controller: NavigationComponentController,
    bindings: {
      isHomeActive: '<',
      isCategoriesActive: '<',
    },
  });
})();

NavigationComponentController.$inject = ['$transitions', '$trace'];
function NavigationComponentController($transitions, $trace) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    if ($ctrl.isHomeActive) {
      $ctrl.classHome = 'nav-link active';
      $ctrl.ariaCurrentHome = 'page';
    } else {
      $ctrl.classHome = 'nav-link';
    }

    if ($ctrl.isCategoriesActive) {
      $ctrl.classCategories = 'nav-link active';
      $ctrl.ariaCurrentCategories = 'page';
    } else {
      $ctrl.classCategories = 'nav-link';
    }

    $transitions.onStart({}, function () {
      $ctrl.showSpinner = true;
    });

    $transitions.onSuccess({}, function () {
      $ctrl.showSpinner = false;
    });

    $transitions.onError({}, function () {
      $ctrl.showSpinner = false;
    });

    $trace.enable('TRANSITION');
  };
}
