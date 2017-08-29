'use strict';

// Register `placeList` component, along with its associated controller and template
angular.
  module('placeList').
  component('placeList', {
    templateUrl: 'place-list/place-list.template.html',
    link: function($scope) {
      $scope.$watch('orderProp', function() {
         debugger;
      });
    },
    controller: ['Places',
      function PlaceListController(Places) {
        var self = this;

        self.updateResults = function() {
          this.places = Places.get({
            location: this.location,
            rankby: this.orderProp,
            type: this.typeProp,
            radius: (this.orderProp === 'prominence') ? this.defaultRadius : null,
            opennow: this.openProp,
            key: this.key
          })
        };

        this.key = 'AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg';
        this.location = '-33.8670522,151.1957362';
        this.orderProp = 'prominence';
        this.defaultRadius = 1000;
        this.typeProp = 'restaurant|bar';
        this.openProp = false;
        this.updateResults();
      }
    ]
  });
