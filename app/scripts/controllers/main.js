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
      'item1','item2','item4'
    ];

<<<<<<< HEAD
    // this is my changes for the local
    //one more changes
    
=======
  // this is the commect done by bijender. this is the for the testing
  
>>>>>>> c0fc14a72a7c1482b171329ebf001bddf90bf870
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index,1);
    }
  });
