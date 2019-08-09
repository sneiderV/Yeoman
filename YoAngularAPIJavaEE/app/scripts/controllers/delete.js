'use strict';

/**
 * @ngdoc function
 * @name yoAngularApijavaEeApp.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the yoAngularApijavaEeApp
 */
angular.module('yoAngularApijavaEeApp')
  .controller('DeleteCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {

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

      /**
       *function to delete a employee
       */
      $scope.fetchDelete = function fetchDelete (name){
        console.log("delete: "+ name);
        $http.delete('//localhost:8080/employee/'+name)
        .then(function successCallBack(response){
    //     "message": "Employee with Name: kshajkshakjhskajjksa deleted successfully"
          $scope.fetch();
          console.log(response.data.message);
        }, function errorCallback(error){
          console.log(error);
        })
      }


    }] );
