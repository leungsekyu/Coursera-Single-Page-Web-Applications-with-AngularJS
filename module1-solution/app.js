(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.lunch = '';
        $scope.message = '';
        $scope.message_style = {};
        $scope.textbox_style = {};

        $scope.lunchCheck = function () {
            var lunch = $scope.lunch.split(',').filter(n => n);
            if (lunch.length === 0) {
                $scope.message = 'Please enter data first';
                $scope.textbox_style = { 'border' : '1px solid red' };
                $scope.message_style = { 'color' : 'red' };
            } else if (lunch.length <= 3) {
                $scope.message = 'Enjoy!';
                $scope.textbox_style = { 'border' : '1px solid green' };
                $scope.message_style = { 'color' : 'green' };
            } else {
                $scope.message = 'Too much!';
                $scope.textbox_style = { 'border' : '1px solid green' };
                $scope.message_style = { 'color' : 'green' };
            }
        };
    };
})();