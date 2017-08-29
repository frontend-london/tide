'use strict';

describe('Places', function() {
  var $httpBackend;
  var Places;
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

  // Load the module that contains the `Places` service before each test
  beforeEach(module('core.places'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Places_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/places.json').respond(placesData);

    Places = _Places_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the places data from `/api/places.json`', function() {
    var placesQuery = Places.query();

    expect(placesQuery).toEqual({});

    $httpBackend.flush();
    expect(placesQuery).toEqual(placesData);
  });

});
