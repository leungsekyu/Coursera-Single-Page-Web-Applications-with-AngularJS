(function () {
  'use strict';

  angular.module('public').service('UserService', UserService);

  // UserService.$inject = [];
  function UserService() {
    var service = this;

    service.user = null;

    service.saveUser = function (user) {
      console.log(user);
      service.user = user;
    };
  }
})();
