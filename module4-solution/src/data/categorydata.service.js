(function () {
  angular.module('Data').service('CategoryDataService', CategoryDataService);

  function CategoryDataService() {
    var service = this;

    service.categoryID = 0;

    service.setCategoryID = function (categoryID) {
      service.categoryID = categoryID;
    };

    service.getCategoryID = function (categoryID) {
      return service.categoryID;
    };
  }
})();
