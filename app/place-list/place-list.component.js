'use strict';

// Register `placeList` component, along with its associated controller and template
angular.
  module('placeList').
  component('placeList', {
    templateUrl: 'place-list/place-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.places = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
