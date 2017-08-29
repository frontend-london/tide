'use strict';

describe('placeDetail', function() {

  // Load the module that contains the `placeDetail` component before each test
  beforeEach(module('localPlacesApp'));
  beforeEach(module('placeDetail'));

  // Test the controller
  describe('PlaceDetailController', function() {
    var $httpBackend, ctrl;
    var xyzPlaceData = {
      name: 'Place xyz',
      result: {
        photos: [
          {photo_reference: 'CmRaAAAAN..'}, 
          {photo_reference: 'kRVw9-ydv..'}
        ]
      }      
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams, _config_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET(_config_.placeApi + '?key=' + _config_.apiKey).respond(xyzPlaceData);

      $routeParams.placeid = 'xyz';

      ctrl = $componentController('placeDetail');
    }));

    it('should fetch the place details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.place).toEqual({});

      $httpBackend.flush();
      expect(ctrl.place).toEqual(xyzPlaceData);
    });

  });

});
