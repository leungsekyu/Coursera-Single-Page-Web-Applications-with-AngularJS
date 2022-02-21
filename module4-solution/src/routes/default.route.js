(function () {
  'use strict';

  angular.module('MenuApp').config([
    '$urlServiceProvider',
    function ($urlServiceProvider) {
      $urlServiceProvider.rules.otherwise({ state: 'home' });
    },
  ]);
})();

// (function () {
//   'use strict';

//   angular.module('MenuApp').config([
//     '$urlRouterProvider',
//     function ($urlRouterProvider) {
//       $urlRouterProvider.otherwise('/');
//     },
//   ]);
// })();
