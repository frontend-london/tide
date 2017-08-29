'use strict';

angular.
  module('core').
  filter('timeformatted', function() {
    return function(timeString) {
      return timeString.substr(0,2) + ':' + timeString.substr(2,2);
    };
  });
