var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('myController', function myController($scope) {
  $scope.author = {
    'name' : 'Elmer',
    'title': 'bballer',
    'position': 'PG/SG'
  }
}
)
