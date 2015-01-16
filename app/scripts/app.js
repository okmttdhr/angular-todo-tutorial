'use strict';

/**
 * @ngdoc overview
 * @name angularTodoTutorialApp
 * @description
 * # angularTodoTutorialApp
 *
 * Main module of the application.
 */

 var angularTodoTutorialApp = angular.module('angularTodoTutorialApp', [
     'ngAnimate',
     'ngCookies',
     'ngResource',
     'ngRoute',
     'ngSanitize',
     'ngTouch',

     'todoServices',
     'todoControllers',
     'todoDirectives'
   ]);


angularTodoTutorialApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
