'use strict';

angular.
  module('core.place').
  factory('Place', ['$resource',
    function($resource) {
      return $resource('api/place.json', {}, {
      // return $resource('https://maps.googleapis.com/maps/api/place/details/json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);
