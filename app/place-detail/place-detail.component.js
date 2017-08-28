'use strict';

// Register `placeDetail` component, along with its associated controller and template
angular.
  module('placeDetail').
  component('placeDetail', {
    templateUrl: 'place-detail/place-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;
        self.place = Phone.get({placeId: $routeParams.placeId}, function(place) {
          self.setImage(place.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
