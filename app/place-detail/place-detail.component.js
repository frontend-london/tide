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

        self.getImage = function(ref) {
          // return 'img/photo.jpg';
          return 'https://maps.googleapis.com/maps/api/place/photo?maxheight=400&maxwidth=400&key=AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg&photoreference=' + ref;
        }

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
