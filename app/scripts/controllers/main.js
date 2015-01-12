'use strict';

/**
 * @ngdoc function
 * @name angularTodoTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoTutorialApp
 */
angular.module('angularTodoTutorialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
