'use strict';

var todoDirectives = angular.module('todoDirectives', []);

todoDirectives.directive('mySelect', [function() {
  return function(scope, $el, attrs) {
    // scope - 現在の $scope オブジェクト
    // $el   - jqLite オブジェクト(jQuery ライクオブジェクト)
    //         jQuery 使用時なら jQuery オブジェクト
    // attrs - DOM 属性のハッシュ(属性名は正規化されている)

    scope.$watch(attrs.mySelect, function (val) {
      console.log('directive: ' + val);
      if (val) {
        console.log('el: ' + $el[0]);

        $el[0].select();
      }
    });
  }
}]);
