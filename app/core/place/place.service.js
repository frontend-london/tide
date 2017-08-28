'use strict';

angular.
  module('core.place').
  factory('Place', ['$resource',
    function($resource) {
      return $resource('places/:placeId.json', {}, {
        query: {
          method: 'GET',
          params: {placeId: 'places'},
          isArray: false
        }
      });
    }
  ]);
