"use strict";

/**
 * @ngdoc function
 * @name yoAngularApijavaEeApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the yoAngularApijavaEeApp
 */
angular.module("yoAngularApijavaEeApp").controller("CreateCtrl", [
  "$scope",
  "$http",
  "$q",
  function($scope, $http, $q) {
    $scope.sentinel = false;
    $scope.message = "";

    //This allow do Post in BD of a new Employee
    $scope.fetchPost = function() {
      if ($scope.pName!=undefined && $scope.pDepartment!=undefined && $scope.pSalary!=undefined) {
        console.log(
          "hacer post " + $scope.pName + $scope.pDepartment + $scope.pSalary
        );
        var nEmploye = {
          name: $scope.pName,
          department: $scope.pDepartment,
          salary: $scope.pSalary
        };
        console.log(nEmploye);
        var deferred = $q.defer();
        $http.post("//localhost:8080/employee", nEmploye).then(
          function successCallback(response) {
            console.log(response.data);
            $scope.employeesList = angular.fromJson(response.data);
            $scope.message = response.data.message;
            $scope.sentinel = true;
            deferred.resolve(
              ($scope.employeesList = angular.fromJson(response.data))
            );
          },
          function errorCallback(error) {
            deferred.resolve(($scope.employeesList = angular.fromJson({})));
          }
        );
        return deferred.promise;
      } else {
        console.log("U need post ALL values in the form");
      }
    };

    //Change value of sentinel to show the Form again
    $scope.showForm = function() {
      $scope.sentinel = false;
    };
  }
]);
