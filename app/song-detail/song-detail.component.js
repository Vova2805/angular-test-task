(function () {
    'use strict';

    // Register `songDetail` component, along with its associated controller and template
    angular.module('songDetail').component('songDetail', {
        templateUrl: 'song-detail/song-detail.template.html',
        controller: ['$routeParams', '$window', '$scope', '$http', '$rootScope',
            function SongDetailController($routeParams, $window, $scope, $http, $rootScope) {

                var self = this;

                self.song = {};
                self.master = {};

                self.buttonTitle = 'UPDATE';

                self.getRightImageURL = getRightImageURL;

                if ($routeParams.operation === 'add') {
                    self.buttonTitle = 'ADD';
                    self.song = {
                        "title": "New",
                        "artist": "",
                        "country": "",
                        "company": "",
                        "price": 0,
                        "year": 0,
                        "id": $rootScope.lastId + 1
                    };
                    console.log($rootScope.lastId);
                    console.log(self.song);
                } else {
                    $http.get('/albums/get/' + $routeParams.songId)
                        .then(function (response) {
                            self.song = response.data;
                            self.song.logoUrl = getRightImageURL(self.song.logoUrl);
                            self.master = angular.copy(self.song);
                        })
                        .catch(function (err) {
                            console.log('err', err);
                            alert('Update failed. Please try again');
                        });
                }

                $scope.reset = function () {
                    self.song = angular.copy(self.master);
                };

                $scope.goBack = function () {
                    $window.location.href = '#!/songs';
                };

                $scope.click = function (song) {
                    if ($routeParams.operation === 'add') {
                        $http({
                            method: 'POST',
                            url: '/albums/add',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: angular.toJson(song)
                        }).success(function (result) {
                            $rootScope.lastId = $rootScope.lastId + 1;
                            console.log($rootScope.lastId);
                            alert('Added');
                            $window.location.href = '#!/songs';
                        }).error(function (err) {
                            console.log('err', err);
                            alert('Update failed. Please try again');
                        });
                    } else {
                        $http({
                            method: 'POST',
                            url: '/albums/update/' + $routeParams.songId,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: angular.toJson(song)
                        }).success(function (result) {
                            alert('Updated');
                        }).error(function (err) {
                            console.log('err', err);
                            alert('Update failed. Please try again');
                        });
                    }
                };
            }
        ]
    });

    function getRightImageURL(url) {
        return typeof url === 'undefined' || url === null || url === '' ? 'img/song_default.png' : url;
    }

})();

