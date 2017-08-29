'use strict';

// Register `placeDetail` component, along with its associated controller and template
angular.
  module('placeDetail').
  component('placeDetail', {
    templateUrl: 'place-detail/place-detail.template.html',
    controller: ['$routeParams', 'Place',
      function PlaceDetailController($routeParams, Place) {
        var self = this;

        self.setImage = function(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        self.place = Place.get({
          placeid: $routeParams.placeId,
          key: 'AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg'
        }, function(place) {
          if (place.result.photos) {
            self.setImage(place.result.photos[0]);
          }
        });
      }
    ]
  });
