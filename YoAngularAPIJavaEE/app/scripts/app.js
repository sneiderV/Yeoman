'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApijavaEeApp
 * @description
 * # yoAngularApijavaEeApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularApijavaEeApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'create'
      })
      .when('/delete', {
        templateUrl: 'views/delete.html',
        controller: 'DeleteCtrl',
        controllerAs: 'delete'
      })
      .when('/update', {
        templateUrl: 'views/update.html',
        controller: 'UpdateCtrl',
        controllerAs: 'update'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
