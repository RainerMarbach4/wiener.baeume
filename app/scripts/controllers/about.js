'use strict';

/**
 * @ngdoc function
 * @name wienerbaeumeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wienerbaeumeApp
 */
angular.module('wienerbaeumeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
