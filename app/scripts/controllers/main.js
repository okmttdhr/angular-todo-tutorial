'use strict';

/**
 * @ngdoc function
 * @name todoControllers.controller:MainController
 * @description
 * # MainController
 * Controller of the todoControllers
 */

var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('RegisterController', ['$scope', 'todos', function ($scope, todos) {
  $scope.newTitle = '';

  $scope.addTodo = function () {
    todos.add($scope.newTitle);
    $scope.newTitle = '';
  };
}]);

todoControllers.controller('ToolbarController', ['$scope', 'todos', function ($scope, todos) {
  $scope.filter = todos.filter;

  $scope.$on('change:list', function (evt, list) {
    var length = list.length;
    var doneCount = todos.getDone().length;

    $scope.allCount = length;
    $scope.doneCount = doneCount;
    $scope.remainingCount = length - doneCount;
  });

  $scope.checkAll = function () {
    todos.changeState(!!$scope.remainingCount);
  };

  $scope.changeFilter = function (filter) {
    $scope.$emit('change:filter', filter);
  };

  $scope.removeDoneTodo = function () {
    todos.removeDone();
  };
}]);

todoControllers.controller('TodoListController', ['$scope', 'todos', function ($scope, todos) {
  $scope.$on('change:list', function (evt, list) {
    $scope.todoList = list;
  });

  var originalTitle;

  $scope.editing = null;

  $scope.editTodo = function (todo) {
    originalTitle = todo.title;
    $scope.editing = todo;
  };

  $scope.doneEdit = function (todoForm) {
    if (todoForm.$invalid) {
      $scope.editing.title = originalTitle;
    }
    $scope.editing = originalTitle = null;
  };

  $scope.removeTodo = function (todo) {
    todos.remove(todo);
  };
}])

todoControllers.controller('MainController', ['$scope', function ($scope) {
  $scope.currentFilter = null;

  $scope.$on('change:filter', function (evt, filter) {
    $scope.currentFilter = filter;
  });
}])
