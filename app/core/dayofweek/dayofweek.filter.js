'use strict';

angular.
  module('core').
  filter('dayofweek', function() {
    return function(dayIndex) {
      return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex];
    };
  });
