'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularApp
 */
angular.module('yeomanAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'item1','item2','item3'
    ];
  });
