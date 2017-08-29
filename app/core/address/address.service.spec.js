'use strict';

describe('Address', function() {
  var $httpBackend,
      Address,
      config,
      addressData = {
        results: [
          {address_components: 'Place X'},
          {address_components: 'Place Y'},
          {address_components: 'Place Z'}
        ]  
      };

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Address` service before each test
  beforeEach(module('localPlacesApp'));
  beforeEach(module('core.address'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Address_, _config_) {
    $httpBackend = _$httpBackend_;
    config = _config_;
    $httpBackend.expectGET(config.addressApi).respond(addressData);

    Address = _Address_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the address data from `config.addressApi`', function() {
    var addressQuery = Address.query();

    expect(addressQuery).toEqual({});

    $httpBackend.flush();
    expect(addressQuery).toEqual(addressData);
  });

});
