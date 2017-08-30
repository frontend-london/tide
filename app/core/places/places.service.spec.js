'use strict';

describe('Places', function() {
  var $httpBackend,
      Places,
      config,
      placesData = {
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

  // Load the module that contains the `Places` service before each test
  beforeEach(module('localPlacesApp'));
  beforeEach(module('core.places'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Places_, _config_) {
    $httpBackend = _$httpBackend_;
    config = _config_;
    $httpBackend.expectGET(config.placesApi).respond(placesData);

    Places = _Places_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the places data from `config.placesApi`', function() {
    var placesQuery = Places.get();

    expect(placesQuery).toEqual({});

    $httpBackend.flush();
    expect(placesQuery).toEqual(placesData);
  });

});
