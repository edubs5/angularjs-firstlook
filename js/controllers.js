var playerControllers = angular.module('playerControllers', []);

playerControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.players = data;
    $scope.playerOrder = "rank";
  });
}]);

playerControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.players = data;
    $scope.whichItem = $routeParams.itemId;

  if ($routeParams.itemId > 0) {
    $scope.prevItem = Number($routeParams.itemId)-1;
  } else {
    $scope.prevItem = $scope.players.length-1;
  }

  if ($routeParams.itemId < $scope.players.length-1) {
    $scope.nextItem = Number($routeParams.itemId)+1;
  } else {
    $scope.nextItem = 0;
  }
  });
}]);