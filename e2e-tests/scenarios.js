'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function() {

  it('should redirect `index.html` to `index.html#!/places', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/places');
  });

  describe('View: Phone list', function() {

    beforeEach(function() {
      browser.get('index.html#!/places');
    });

    it('should filter the place list as a user types into the search box', function() {
      var placeList = element.all(by.repeater('place in $ctrl.places'));
      var query = element(by.model('$ctrl.query'));

      expect(placeList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(placeList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(placeList.count()).toBe(8);
    });

    it('should be possible to control place order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var placeNameColumn = element.all(by.repeater('place in $ctrl.places').column('place.name'));

      function getNames() {
        return placeNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('should render place specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.places li a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/places/nexus-s');
    });

  });

  describe('View: Phone detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/places/nexus-s');
    });

    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.place.name')).getText()).toBe('Nexus S');
    });

    it('should display the first place image as the main place image', function() {
      var mainImage = element(by.css('img.place.selected'));

      expect(mainImage.getAttribute('src')).toMatch(/img\/places\/nexus-s.0.jpg/);
    });

    it('should swap the main image when clicking on a thumbnail image', function() {
      var mainImage = element(by.css('img.place.selected'));
      var thumbnails = element.all(by.css('.place-thumbs img'));

      thumbnails.get(2).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/places\/nexus-s.2.jpg/);

      thumbnails.get(0).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/places\/nexus-s.0.jpg/);
    });

  });

});
