'use strict';

describe('Place', function() {
  var $httpBackend,
      Place,
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

  // Load the module that contains the `Place` service before each test
  beforeEach(module('localPlacesApp'));
  beforeEach(module('core.place'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Place_, _config_) {
    $httpBackend = _$httpBackend_;
    config = _config_;
    $httpBackend.expectGET(config.placeApi).respond(placesData);

    Place = _Place_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the places data from `/api/place.json`', function() {
    var places = Place.query();

    expect(places).toEqual({});

    $httpBackend.flush();
    expect(places).toEqual(placesData);
  });

});
