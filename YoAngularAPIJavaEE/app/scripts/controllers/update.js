'use strict';

/**
 * @ngdoc function
 * @name yoAngularApijavaEeApp.controller:UpdateCtrl
 * @description
 * # UpdateCtrl
 * Controller of the yoAngularApijavaEeApp
 */
angular.module('yoAngularApijavaEeApp')
  .controller('UpdateCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {

    /**
       * Function to get all employees
       */
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

      $scope.editO = false;
      $scope.editF = true;
      /**
       *
       */
      $scope.showOption = function showOption(){
        $scope.editO = true;
        $scope.editF = false;
      }

      $scope.pDepartment = "";
      $scope.pSalary = 0;
      /**
       *
       */
      $scope.fetchUpdate = function fetchUpdate (employee){

        console.log("new e: ",employee.name, "d",$scope.pDepartment,"s",$scope.pSalary );
        // var deferred = $q.defer();
        // $http.put('//localhost:8080/employee',employee)
        // .then(function successCallback(response) {
        //       $scope.employeesList = angular.fromJson(response.data);
        //   deferred.resolve(
        //     $scope.employeesList = angular.fromJson(response.data)
        //     );
        // }, function errorCallback(error) {
        //   deferred.resolve(
        //     $scope.employeesList = angular.fromJson({})
        //     );
        // });
        // return deferred.promise;

      };

  }]);
