'use strict';

describe('placeList', function() {

  // Load the module that contains the `placeList` component before each test
  beforeEach(module('localPlacesApp'));
  beforeEach(module('placeList'));

  // Test the controller
  describe('PlaceListController', function() {
    var $httpBackend, 
      ctrl,
      config,
      addressObj = {
        results: [
          {formatted_address: 'Place Address'}
        ]
      },
      placesObj = {
        results: [
          {name: 'Place 1'}, 
          {name: 'Place 2'}
        ]
      };

    beforeEach(inject(function($componentController, _$httpBackend_, _config_) {
      $httpBackend = _$httpBackend_;
      config = _config_;
      $httpBackend.expectGET('api/address.json?key=AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg&latlng=51.5222735,-0.1118921,17')
        .respond(addressObj);

      $httpBackend.expectGET('api/places.json?key=AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg&location=51.5222735,-0.1118921,17&opennow=false&radius=1000&rankby=prominence&type=restaurant%7Cbar')
      .respond(placesObj);

      ctrl = $componentController('placeList');
    }));

    it('should create a `places` property with 2 places fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      ctrl.updateResults();

      expect(ctrl.address).toEqual({});
      expect(ctrl.places).toEqual({});

      $httpBackend.flush();
      expect(ctrl.address).toEqual(addressObj);
      expect(ctrl.places).toEqual(placesObj);
    });

    it('should set a default value for the `data.order` property', function() {
      expect(ctrl.data.order).toBe('prominence');
    });

    it('should set a default value for the `data.type` property', function() {
      expect(ctrl.data.type).toBe('restaurant|bar');
    });

    it('should set a default value for the `data.open` property', function() {
      expect(ctrl.data.open).toBe(false);
    });

    it('should set a default value for the `data.nextPage` property', function() {
      expect(ctrl.data.nextPage).toBe(null);
    });

    it('should set a default value for the `data.location` property', function() {
      expect(ctrl.data.location).toBe(config.defaultLocation);
    });

  });

});
