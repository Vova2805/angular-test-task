'use strict';

// Register `songDetail` component, along with its associated controller and template
angular.module('songDetail').component('songDetail', {
    templateUrl: 'song-detail/song-detail.template.html',
    controller: ['$routeParams', '$scope', '$http',
        function SongDetailController($routeParams, $scope, $http) {

            console.log('song');

            var self = this;

            $scope.song = {};

            $http.get('/albums/get/' + $routeParams.songId).then(function (response) {
                console.log('response', response.data);
                $scope.song = response.data;
            });
        }
    ]
});
