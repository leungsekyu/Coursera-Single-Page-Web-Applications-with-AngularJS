(function () {
  'use strict';

  angular.module('public').config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        abstract: true,
        templateUrl: 'src/public/public.html',
      })
      .state('public.home', {
        url: '/',
        templateUrl: 'src/public/home/home.html',
      })
      .state('public.menu', {
        url: '/menu',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuCategories: [
            'MenuService',
            function (MenuService) {
              return MenuService.getCategories();
            },
          ],
        },
      })
      .state('public.menuItems', {
        url: '/menu/{category}',
        templateUrl: 'src/public/menu-items/menu-items.html',
        controller: 'MenuItemsController',
        controllerAs: 'menuItemsCtrl',
        resolve: {
          menuItems: [
            '$stateParams',
            'MenuService',
            function ($stateParams, MenuService) {
              return MenuService.getMenuItems($stateParams.category);
            },
          ],
        },
      })
      .state('public.unauthenticated', {
        url: '/unauthenticated',
        templateUrl: 'src/public/unauthenticated/unauthenticated.html',
      })
      .state('public.myInfo', {
        url: '/my-info',
        templateUrl: 'src/public/my-info/my-info.html',
        controller: 'MyInfoController',
        controllerAs: 'myInfoCtrl',
        resolve: {
          favoriteDish: [
            'MenuService',
            'UserService',
            function (MenuService, UserService) {
              var user = UserService.getUser();
              return MenuService.getMenuItem(user.favoriteDishShortName);
            },
          ],
        },
      })
      .state('public.signUp', {
        url: '/sign-up',
        templateUrl: 'src/public/sign-up/sign-up.html',
        controller: 'SignUpController',
        controllerAs: 'signUpCtrl',
      });
  }
})();
