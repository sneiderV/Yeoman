'use strict';

describe('Controller: DeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApijavaEeApp'));

  var DeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeleteCtrl = $controller('DeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeleteCtrl.awesomeThings.length).toBe(3);
  });
});
