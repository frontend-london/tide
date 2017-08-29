'use strict';

describe('dayofweek', function() {

  beforeEach(module('core'));

  it('should convert integer values to string with name of day in week',
    inject(function(dayofweekFilter) {
      expect(dayofweekFilter(0)).toBe('Monday');
      expect(dayofweekFilter(1)).toBe('Tuesday');
      expect(dayofweekFilter(2)).toBe('Wednesday');
      expect(dayofweekFilter(3)).toBe('Thursday');
      expect(dayofweekFilter(4)).toBe('Friday');
      expect(dayofweekFilter(5)).toBe('Saturday');
      expect(dayofweekFilter(6)).toBe('Sunday');
    })
  );

});
