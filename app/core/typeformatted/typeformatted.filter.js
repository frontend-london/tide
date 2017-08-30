'use strict';

angular.
  module('core').
  filter('typeformatted', function() {
    return function(typeString) {
      return typeString.replace(new RegExp('_', 'g'), ' ');
    };
  });
