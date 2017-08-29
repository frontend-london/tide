'use strict';

angular.
  module('core.address').
  factory('Address', ['$resource', 'config',
    function($resource, config) {
      return $resource(config.addressApi, {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);
