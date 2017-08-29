'use strict';

// Register `placeList` component, along with its associated controller and template
angular.
  module('placeList').
  component('placeList', {
    templateUrl: 'place-list/place-list.template.html',
    controller: ['Places',
      function PlaceListController(Places) {
        var self = this;

        this.key = 'AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg';
        this.location = '51.5222735,-0.1118921,17';
        this.orderProp = 'prominence';
        this.defaultRadius = 1000;
        this.typeProp = 'restaurant|bar';
        this.openProp = false;
        this.pageToken = null;

        self.updateLocation = function(position) {
          self.location = position.coords.latitude + ',' + position.coords.longitude;
          self.updateResults();
        };

        self.getLocation = function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(self.updateLocation);
          } else {
            this.updateResults(); // show results for default location
          }
        }

        self.updateResults = function() {
          this.places = Places.get({
            location: this.location,
            rankby: this.orderProp,
            type: this.typeProp,
            radius: (this.orderProp === 'prominence') ? this.defaultRadius : null,
            opennow: this.openProp,
            pagetoken: this.pageToken,
            key: this.key
          })
        };

        self.loadNextPage = function(token) {
          event.preventDefault();
          this.pageToken = token;
          this.updateResults();
        }
        
        // this.updateResults();
        this.getLocation();
      }
    ]
  });
