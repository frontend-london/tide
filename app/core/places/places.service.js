'use strict';

angular.
  module('core.places').
  factory('Places', ['$resource',
    function($resource) {
      return $resource('api/:placeId.json', {}, {
        query: {
          method: 'GET',
          params: {placeId: 'places'},
          isArray: false
        }
      });
    }
  ]);
