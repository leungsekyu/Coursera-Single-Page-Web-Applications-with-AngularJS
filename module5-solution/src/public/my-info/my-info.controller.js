(function () {
  'use strict';

  angular.module('public').controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService', 'ApiPath', 'favoriteDish'];
  function MyInfoController(UserService, ApiPath, favoriteDish) {
    var myInfoCtrl = this;
    myInfoCtrl.basePath = ApiPath;
    myInfoCtrl.user = UserService.getUser();
    myInfoCtrl.user.favoriteDish = favoriteDish;
  }
})();
