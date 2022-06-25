(function () {
  'use strict';

  angular.module('public').controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService'];
  function SignUpController(UserService) {
    var signUpCtrl = this;

    signUpCtrl.saveUser = function (user) {
      UserService.saveUser(user);
    };
  }
})();
