'use strict';

/**
 * @ngdoc function
 * @name todoControllers.controller:MainController
 * @description
 * # MainController
 * Controller of the todoControllers
 */

var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('MainController', ['$scope', '$filter',
  function($scope, $filter) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.todos = [];

    var where = $filter('filter'); // filter フィルタ関数の取得
    $scope.$watch('todos', function (todos) {
      // todos が増減したり各要素のプロパティが変更された時に実行される
      var length = todos.length;

      $scope.allCount = length;                                   // 総件数モデル
      $scope.doneCount = where(todos, $scope.filter.done).length; // 完了件数モデル
      $scope.remainingCount = length - $scope.doneCount;          // 未了件数モデル
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push({
        title: $scope.newTitle,
        done: false
      });

      $scope.newTitle = '';
    };

    var originalTitle;     // 編集前の要件
    $scope.editing = null; // 編集モードの ToDo モデルを表すモデル

    $scope.editTodo = function (todo) {
      originalTitle = todo.title;
      $scope.editing = todo;
    };

    $scope.doneEdit = function (todoForm) {
      if (todoForm.$invalid) {
        $scope.editing.title = originalTitle;
      }

      $scope.editing = null;
    };

    // フィルタリング条件モデル
    $scope.filter = {
      done: { done: true },      // 完了のみ
      remaining: { done: false } // 未了のみ
    };

    // 現在のフィルタの状態モデル
    $scope.currentFilter = null;

    // フィルタリング条件を変更するメソッド
    $scope.changeFilter = function (filter) {
      $scope.currentFilter = filter;
    };
  }
]);
