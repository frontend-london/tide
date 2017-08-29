'use strict';

describe('placeList', function() {

  // Load the module that contains the `placeList` component before each test
  beforeEach(module('placeList'));

  // Test the controller
  describe('PlaceListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/address.json?key=AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg&latlng=51.5222735,-0.1118921,17')
        .respond({
          results: [
            {name: 'Place 1'}, 
            {name: 'Place 2'}
          ]
      });

      $httpBackend.expectGET('api/places.json?key=AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg&location=51.5222735,-0.1118921,17&opennow=false&radius=1000&rankby=prominence&type=restaurant%7Cbar')
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
      ctrl.updateResults();
      // debugger;

      expect(ctrl.address).toEqual({});

      expect(ctrl.places).toEqual({});

      $httpBackend.flush();
      expect(ctrl.address).toEqual({
        results: [
          {name: 'Place 1'}, 
          {name: 'Place 2'}
        ]
      });

      expect(ctrl.places).toEqual({
        results: [
          {name: 'Place 1'}, 
          {name: 'Place 2'}
        ]
      });
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('prominence');
    });

  });

});
