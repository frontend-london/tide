'use strict';

describe('placeList', function() {

  // Load the module that contains the `placeList` component before each test
  beforeEach(module('placeList'));

  // Test the controller
  describe('PlaceListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('places/places.json')
        .respond({
          results: [
            {name: 'Place 1'}, 
            {name: 'Place 2'}
          ]
        });

      ctrl = $componentController('placeList');
    }));

    it('should create a `places` property with 2 places fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.places).toEqual({});

      $httpBackend.flush();
      expect(ctrl.places).toEqual({
        results: [
          {name: 'Place 1'}, 
          {name: 'Place 2'}
        ]
      });
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('importance');
    });

  });

});
