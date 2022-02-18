(function () {
  angular
    .module('MenuApp')
    .service('MenuCategoriesService', MenuCategoriesService);

  MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
  function MenuCategoriesService($http, ApiBasePath) {
    var service = this;

    service.getCategories = function () {
      return $http({
        method: 'get',
        url: ApiBasePath + '/categories.json',
      })
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }
})();
