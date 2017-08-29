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
        }

        self.updateLocation = function(position) {
          self.data.location = position.coords.latitude + ',' + position.coords.longitude;
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
            latlng: this.data.location
          });

          this.places = Places.get({
            location  : this.data.location,
            rankby    : this.data.order,
            type      : this.data.type,
            radius    : (this.data.order === 'prominence') ? config.defaultRadius : null,
            opennow   : this.data.open,
            pagetoken : this.data.nextPage,
            key       : config.apiKey
          })
        };

        self.loadNextPage = function(token) {
          event.preventDefault();
          this.data.nextPage = token;
          this.updateResults();
        }
        
        this.getLocation();
      }
    ]
  });
