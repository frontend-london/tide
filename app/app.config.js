'use strict';

angular.
  module('localPlacesApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/places', {
          template: '<place-list></place-list>'
        }).
        when('/places/:placeId', {
          template: '<place-detail></place-detail>'
        }).
        otherwise('/places');
    }
  ]).
  constant('config', {
    apiKey: 'AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg',
    defaultLocation: '51.5222735,-0.1118921,17', // White Bear Yard
    defaultRadius: 1000, 
    // imagePath: 'https://maps.googleapis.com/maps/api/place/photo' // local - 'img/photo.jpg'
    imagePath: 'img/photo.jpg' // local
  });