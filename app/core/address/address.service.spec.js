'use strict';

describe('Address', function() {
  var $httpBackend;
  var Address;
  var addressData = {
    results: [
      {name: 'Place X'},
      {name: 'Place Y'},
      {name: 'Place Z'}
    ]  
  };

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Address` service before each test
  beforeEach(module('core.address'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Address_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('address/address.json').respond(addressData);

    Address = _Address_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the address data from `/address/address.json`', function() {
    var addressQuery = Address.query();

    expect(addressQuery).toEqual({});

    $httpBackend.flush();
    expect(addressQuery).toEqual(addressData);
  });

});
