'use strict';

angular.
  module('core.place').
  factory('Place', ['$resource',
    function($resource) {
      return $resource('api/:placeId.json', {}, {
        query: {
          method: 'GET',
          params: {placeId: 'place'},
          isArray: false
        }
      });
    }
  ]);
