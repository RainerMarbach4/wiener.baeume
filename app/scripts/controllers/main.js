'use strict';

/**
 * @ngdoc function
 * @name wienerbaeumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wienerbaeumeApp
 */
angular.module('wienerbaeumeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
