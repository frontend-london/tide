'use strict';

describe('typeformatted', function() {

  beforeEach(module('core'));

  it('should convert 1 word type value to few words',
    inject(function(typeformattedFilter) {
      expect(typeformattedFilter('point_of_interest')).toBe('point of interest');
      expect(typeformattedFilter('night_club')).toBe('night club');
    })
  );

});
