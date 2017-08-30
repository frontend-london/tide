'use strict';

angular.
  module('core.place').
  factory('Place', ['$resource', 'config',
    function($resource, config) {
      return $resource(config.placeApi, {}, {
        get: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);
