'use strict';

/**
 * @ngdoc function
 * @name angularTodoTutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTodoTutorialApp
 */
angular.module('angularTodoTutorialApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
