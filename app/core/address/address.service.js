'use strict';

angular.
  module('core.address').
  factory('Address', ['$resource',
    function($resource) {
      // return $resource('https://maps.googleapis.com/maps/api/geocode/json', {}, {
      return $resource('api/address.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);
