'use strict';

// Register `placeDetail` component, along with its associated controller and template
angular.
  module('placeDetail').
  component('placeDetail', {
    templateUrl: 'place-detail/place-detail.template.html',
    controller: ['$routeParams', 'Place', 'config',
      function PlaceDetailController($routeParams, Place, config) {
        var self = this;

        self.setImage = function(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        self.getImage = function(ref) {
          return config.imagePath + '?maxheight=400&maxwidth=400&key=' + config.apiKey + '&photoreference=' + ref;
        }

        self.place = Place.get({
          placeid: $routeParams.placeId,
          key: config.apiKey
        }, function(place) {
          if (place.result.photos) {
            self.setImage(place.result.photos[0]);
          }
        });
      }
    ]
  });
