'use strict';

/**
 * @ngdoc overview
 * @name wienerbaeumeApp
 * @description
 * # wienerbaeumeApp
 *
 * Main module of the application.
 */
angular
  .module('wienerbaeumeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/baum', {
        templateUrl: 'views/baum.html',
        controller: 'BaumCtrl'
      })
      .when('/calc', {
        templateUrl: 'views/calc.html',
        controller: 'CalcCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
