'use strict';

describe('Music List App', function() {

  it('should redirect `index.html` to `index.html#!/html/songs', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/songs');
  });

});