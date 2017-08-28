'use strict';

// Register `placeList` component, along with its associated controller and template
angular.
  module('placeList').
  component('placeList', {
    templateUrl: 'place-list/place-list.template.html',
    controller: ['Place',
      function PlaceListController(Place) {
        this.places = Place.query();
        this.orderProp = 'age';
      }
    ]
  });
