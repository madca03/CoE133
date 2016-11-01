var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('DocumentController', ['$scope', '$http', function($scope, $http) {
  $http.get('/data/document.json').success(function(data) {
    $scope.documents = data;
  });
}]);
