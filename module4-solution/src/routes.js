(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
function RoutesConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'src/menu/template/home.template.html'
    })

    .state('categories', {
        url: '/categories',
        templateUrl: 'src/menu/template/categories.template.html'
    })
}
})();