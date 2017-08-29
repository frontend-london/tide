'use strict';

describe('dayofweek', function() {

  beforeEach(module('core'));

  it('should convert boolean values to unicode dayofweek or cross',
    inject(function(dayofweekFilter) {
      expect(dayofweekFilter(true)).toBe('\u2713');
      expect(dayofweekFilter(false)).toBe('\u2718');
    })
  );

});
