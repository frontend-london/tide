'use strict';

angular.
  module('core.places').
  factory('Places', ['$resource',
    function($resource) {
      // return $resource('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {}, {
      return $resource('api/places.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);
