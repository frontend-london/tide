'use strict';

// Register `placeDetail` component, along with its associated controller and template
angular.
  module('placeDetail').
  component('placeDetail', {
    templateUrl: 'place-detail/place-detail.template.html',
    controller: ['$routeParams', 'Place',
      function PlaceDetailController($routeParams, Place) {
        var self = this;
        self.place = Place.get({placeId: $routeParams.placeId}, function(place) {
          // debugger; 
          // self.setImage(place.images[0]);

          if (place.result.photos) {
            self.setImage(place.result.photos[0]);
          }
          
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
