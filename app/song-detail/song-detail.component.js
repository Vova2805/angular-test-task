(function () {
    'use strict';

    // Register `songDetail` component, along with its associated controller and template
    angular.module('songDetail').component('songDetail', {
        templateUrl: 'song-detail/song-detail.template.html',
        controller: ['$routeParams', '$scope', '$http',
            function SongDetailController($routeParams, $scope, $http) {

                var self = this;

                self.song = {};
                self.master = {};

                self.getRightImageURL = getRightImageURL;

                $http.get('/albums/get/' + $routeParams.songId)
                    .then(function (response) {
                        self.song = response.data;
                        self.song.logoUrl = getRightImageURL(self.song.logoUrl);
                        self.master = angular.copy(self.song);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });


                $scope.reset = function () {
                    self.song = angular.copy(self.master);
                };

                $scope.update = function (song) {
                    $http({
                        method: 'POST',
                        url: '/albums/update/' + $routeParams.songId,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        data: angular.toJson(song)
                    }).success(function (result) {
                        console.log('result', result);
                        alert('success');
                    }).error(function (err) {
                        console.log('err', err);
                    });
                };
            }
        ]
    });

    function getRightImageURL(url) {
        return typeof url === 'undefined' || url === null || url === '' ? 'img/song_default.png' : url;
    }

})();

