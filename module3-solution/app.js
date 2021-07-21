(function () {
  'use strict';

  angular
    .module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'matchedMenuItems.template.html',
      scope: {
        found: '<',
        onRemove: '&',
        showTable: '&',
        showReminder: '&',
      },
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;

    controller.loading = false;
    controller.getMatchedMenuItems = function (searchTerm) {
      controller.loading = true;
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise
        .then(function (response) {
          controller.loading = false;
          controller.found = response;
          console.log(controller.found);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    controller.showTable = function () {
      if (controller.found !== undefined && controller.found.length !== 0) {
        return true;
      }
      return false;
    };

    controller.showReminder = function () {
      if (controller.found === undefined) {
        return false;
      } else if (controller.found.length === 0) {
        return true;
      }
      return false;
    };

    controller.removeMatchedMenuItem = function (matchedMenuItemIndex) {
      controller.found.splice(matchedMenuItemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: 'get',
        url: ApiBasePath + '/menu_items.json',
      }).then(function (response) {
        var foundItems = [];

        if (searchTerm === undefined) {
          return foundItems;
        }

        var matchedMenuItems = response.data.menu_items;
        for (var matchedMenuItem of matchedMenuItems) {
          if (
            matchedMenuItem.description
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) != -1
          ) {
            foundItems.push(matchedMenuItem);
          }
        }

        return foundItems;
      });
    };
  }
})();
