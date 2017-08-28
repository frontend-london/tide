'use strict';

describe('Place', function() {
  var $httpBackend;
  var Place;
  var placesData = {
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
  beforeEach(module('core.place'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Place_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('places/places.json').respond(placesData);

    Place = _Place_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the places data from `/places/places.json`', function() {
    var places = Place.query();

    console.info('places', places);

    expect(places).toEqual({});

    $httpBackend.flush();
    expect(places).toEqual(placesData);
  });

});
