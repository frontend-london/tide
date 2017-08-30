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
  ]);