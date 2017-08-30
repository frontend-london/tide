'use strict';

describe('placeDetail', function() {

  // Load the module that contains the `placeDetail` component before each test
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

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('places/xyz.json').respond(xyzPlaceData);

      $routeParams.placeId = 'xyz';

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
