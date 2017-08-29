'use strict';

// Register `placeList` component, along with its associated controller and template
angular.
  module('placeList').
  value('placeListConfig', {
    order   : 'prominence',
    type    : 'restaurant|bar',
    open    : false,
    nextPage: null
  }).
  component('placeList', {
    templateUrl: 'place-list/place-list.template.html',
    controller: ['$location', 'Places', 'Address', 'config', 'placeListConfig',
      function PlaceListController($location, Places, Address, config, placeListConfig) {
        var self = this;

        self.data = {
          location  : config.defaultLocation,
          order     : placeListConfig.order,
          type      : placeListConfig.type,
          open      : placeListConfig.open,
          nextPage  : placeListConfig.nextPage
        };

        self.go = function(path) {
          $location.path( path );
        };

        self.getImage = function(ref) {
          return config.imagePath + '?maxheight=100&maxwidth=100&key=' + config.apiKey + '&photoreference=' + ref;
        };

        self.getAddress = function() {
          self.address = Address.get({
            key: config.apiKey,
            latlng: self.data.location
          });
        };

        self.getPlaces = function() {
          self.places = Places.get({
            location  : self.data.location,
            rankby    : self.data.order,
            type      : self.data.type,
            radius    : (self.data.order === 'prominence') ? config.defaultRadius : null,
            opennow   : self.data.open,
            pagetoken : self.data.nextPage,
            key       : config.apiKey
          })
        };

        self.getAddressAndPlaces = function() {
          self.getAddress();
          self.getPlaces();
        };

        self.updateLocationAndPlaces = function(position) {
          self.data.location = position.coords.latitude + ',' + position.coords.longitude;
          self.getAddressAndPlaces();
        };

        self.getLocationAndPlaces = function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(self.updateLocationAndPlaces, self.getAddressAndPlaces);
          } else {
            self.getAddressAndPlaces();
          }
        };

        self.loadNextPage = function(token) {
          event.preventDefault();
          self.data.nextPage = token;
          self.getPlaces();
        }
        
        self.getLocationAndPlaces();
      }
    ]
  });
