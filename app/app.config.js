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
    apiKey          : 'AIzaSyC0on6d3nbJ8amjRosKkMXElJJe_RujTlg',
    addressApi      : 'api/address.json',
    // addressApi   : 'https://maps.googleapis.com/maps/api/geocode/json',
    // placesApi    : 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    placesApi       : 'api/places.json',
    // placesApi    : 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    placeApi        : 'api/place.json',
    // placeApi     : 'https://maps.googleapis.com/maps/api/place/details/json',
    defaultLocation : '51.5222768,-0.111892117', // White Bear Yard
    defaultRadius   : 1000, 
    // imagePath    : 'https://maps.googleapis.com/maps/api/place/photo' // local - 'img/photo.jpg'
    imagePath       : 'img/photo.jpg' // local
  });