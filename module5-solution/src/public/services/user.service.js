(function () {
  'use strict';

  angular.module('public').service('UserService', UserService);

  // UserService.$inject = [];
  function UserService() {
    var service = this;
    var _user = null;

    // var _user = {
    //   firstName: '1',
    //   lastName: '1',
    //   emailAddress: '1@1',
    //   phoneNumber: '111-111-1111',
    //   favoriteDishShortName: 'L1',
    // };

    service.saveUser = function (user) {
      _user = user;
    };

    service.getUser = function () {
      return _user;
    };

    service.isAuthenticated = function () {
      return _user !== null;
    };
  }
})();
