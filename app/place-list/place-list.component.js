'use strict';

// Register `placeList` component, along with its associated controller and template
angular.
  module('placeList').
  component('placeList', {
    templateUrl: 'place-list/place-list.template.html',
    controller: ['Places',
      function PlaceListController(Places) {
        var self = this;

        this.places = Places.query();
        this.orderProp = 'importance';
        this.typeProp = 'restaurant|bar';

        self.updateResults = function() {
          // debugger;
          // this.orderProp
        };
      }
    ]
  });
