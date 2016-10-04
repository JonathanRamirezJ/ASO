'use strict';

var app2 = angular.module('myApp2', ['ngResource']);

app2.controller('elementsController', function ($scope, dataResource) {
    $scope.datosResource = dataResource.get();
    $scope.myFunction = function(index) {
      console.log('Index selecionado: '+index);
    };
});

app2.factory('dataResource', function ($resource) {
  return $resource('../api.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});
