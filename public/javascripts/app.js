var app = angular.module('app', []);

app.controller('DocumentController', ['$scope', '$http', function($scope, $http) {
  $scope.query = {};

  $http.get('/data/documents.json').success(function(data) {
    $scope.documents = data;
  });

  $scope.filterType = function(type) {
    $scope.query.type = type;
  };

  $scope.emptyType = function() {
    $scope.query.type = '';
  };
}]);
