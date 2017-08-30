'use strict';

describe('ratingformatted', function() {

  beforeEach(module('core'));

  it('should convert string rating value to rounded number of stars',
    inject(function(ratingformattedFilter) {
      expect(ratingformattedFilter('1.2')).toBe('\u2605');
      expect(ratingformattedFilter('2.8')).toBe('\u2605\u2605\u2605');
    })
  );

});
