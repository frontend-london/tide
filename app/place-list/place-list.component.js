'use strict';

// Register `placeList` component, along with its associated controller and template
angular.
  module('placeList').
  component('placeList', {
    templateUrl: 'place-list/place-list.template.html',
    controller: ['$location', 'Places', 'Address', 'config',
      function PlaceListController($location, Places, Address, config) {
        var self = this;

        self.location = config.defaultLocation;
        self.orderProp = 'prominence';
        self.typeProp = 'restaurant|bar';
        self.openProp = false;
        self.pageToken = null;

        self.updateLocation = function(position) {
          self.location = position.coords.latitude + ',' + position.coords.longitude;
          self.updateResults();
        };

        self.go = function(path) {
          $location.path( path );
        }

        self.getImage = function(ref) {
          return config.imagePath + '?maxheight=100&maxwidth=100&key=' + config.apiKey + '&photoreference=' + ref;
        }

        self.getLocation = function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(self.updateLocation);
          } else {
            this.updateResults(); // show results for default location
          }
        }

        self.updateResults = function() {
          this.address = Address.get({
            key: config.apiKey,
            latlng: this.location
          });

          this.places = Places.get({
            location: this.location,
            rankby: this.orderProp,
            type: this.typeProp,
            radius: (this.orderProp === 'prominence') ? config.defaultRadius : null,
            opennow: this.openProp,
            pagetoken: this.pageToken,
            key: config.apiKey
          })
        };

        self.loadNextPage = function(token) {
          event.preventDefault();
          this.pageToken = token;
          this.updateResults();
        }
        
        this.getLocation();
      }
    ]
  });
