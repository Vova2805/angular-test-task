'use strict';

angular.
  module('songApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/songs', {
          template: '<song-list></song-list>'
        }).
        when('/songs/:songId', {
          template: '<song-detail></song-detail>'
        }).
        otherwise('/songs');
    }
  ]);
