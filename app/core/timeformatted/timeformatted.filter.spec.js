'use strict';

describe('timeformatted', function() {

  beforeEach(module('core'));

  it('should convert integer time value to formatted string',
    inject(function(timeformattedFilter) {
      expect(timeformattedFilter('1200')).toBe('12:00');
      expect(timeformattedFilter('0830')).toBe('08:30');
    })
  );

});
