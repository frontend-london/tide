'use strict';

angular.
  module('core').
  filter('ratingformatted', function() {
    return function(ratingString) {
      var rating = '';
      for (var i=1;i <= Math.round(ratingString);i++) {
        rating += '\u2605';
      }
      return rating;
    };
  });
