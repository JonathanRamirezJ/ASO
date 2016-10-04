'use strict';

var app = angular.module('myApp', ['ngRoute','ngResource']);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : ' components/home.html'
    })
    .when('/home', {
        templateUrl : 'components/home.html'
    })
    .when('/somos', {
        templateUrl : 'components/somos.html'
    })
    .when('/ofrecemos', {
        templateUrl : 'components/ofrecemos.html'
    })
    .when('/costos', {
        templateUrl : 'components/cost.html',
        controller: 'elementsController'
    })
    .when('/aviso', {
        templateUrl : 'components/avisoP.html'
    })
    .when('/about', {
        templateUrl : 'components/about.html'
    })
    .otherwise({
        redirectTo : '/'
    });
}]);

// Jony Component

app.controller('elementsController', function ($scope, dataResource) {
    $scope.datosResource = dataResource.get();
    $scope.myFunction = function(index) {
      console.log('Index selecionado: '+index);
    };
});

app.factory('dataResource', function ($resource) {
  return $resource('../api.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});
