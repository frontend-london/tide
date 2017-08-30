'use strict';

angular.
  module('core.places').
  factory('Places', ['$resource', 'config',
    function($resource, config) {
      return $resource(config.placesApi, {}, {
        get: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);
