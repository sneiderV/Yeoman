'use strict';

/**
 * @ngdoc function
 * @name yoAngularApijavaEeApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the yoAngularApijavaEeApp
 */
angular.module('yoAngularApijavaEeApp')
  .controller('ListCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {

    $scope.fetch = function(){
      var deferred = $q.defer();
      $http.get('//localhost:8080/employee')
      .then(function successCallback(response) {
            $scope.employeesList = angular.fromJson(response.data);
        deferred.resolve(
          $scope.employeesList = angular.fromJson(response.data)
          );
      }, function errorCallback(error) {
        deferred.resolve(
          $scope.employeesList = angular.fromJson({})
          );
      });
      return deferred.promise;
    };


  }] );
