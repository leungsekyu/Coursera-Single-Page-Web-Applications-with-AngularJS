(function () {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.checkItem = function (itemIndex) {
      ShoppingListCheckOffService.checkItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;

    alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: 'ice cream', quantity: 1 },
      { name: 'chocolate', quantity: 1 },
      { name: 'chips', quantity: 1 },
      { name: 'hamburger', quantity: 1 },
      { name: 'cake', quantity: 2 },
    ];
    var boughtItems = [];

    service.checkItem = function (itemIndex) {
      service.addBoughtItem(itemIndex);
      service.removeToBuyItem(itemIndex);
    };
    service.addBoughtItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];
      boughtItems.push(item);
    };
    service.removeToBuyItem = function (itemIndex) {
      toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };
    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
})();
