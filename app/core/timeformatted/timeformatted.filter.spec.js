'use strict';

describe('timeformatted', function() {

  beforeEach(module('core'));

  it('should convert boolean values to unicode timeformatted or cross',
    inject(function(timeformattedFilter) {
      expect(timeformattedFilter(true)).toBe('\u2713');
      expect(timeformattedFilter(false)).toBe('\u2718');
    })
  );

});
