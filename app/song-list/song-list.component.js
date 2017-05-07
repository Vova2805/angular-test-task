(function () {
    'use strict';

    // Register `songList` component, along with its associated controller and template
    angular.module('songList')
        .component('songList', {
            templateUrl: 'song-list/song-list.template.html',
            controller: ['$scope', '$http', '$window', '$rootScope',
                function SongListController($scope, $http, $window, $rootScope) {

                    var self = this;
                    self.songs = [];
                    self.count = self.songs.length;
                    self.initCount = self.songs.length;

                    var updateList = function updateList() { // just to show that I know about different scopes
                        $http.get('/albums/all')
                            .then(function (response) {
                                self.songs = $.map(response.data, function (value, index) {
                                    return angular.copy(response.data[index]);
                                });
                                self.count = self.songs.length;
                            })
                            .catch(function (err) {
                                console.log('err', err);
                                alert('Update failed. Please try again');
                            });
                    };


                    var updateCount = function updateCount() {
                        $http.get('/albums/count')
                            .then(function (response) {
                                self.initCount = response.data['value'];
                                if (typeof $rootScope.lastId === 'undefined' || $rootScope.lastId === null) {
                                    $rootScope.lastId = self.initCount;
                                    console.log($rootScope.lastId);
                                }
                            })
                            .catch(function (err) {
                                console.log('err', err);
                                alert('Update failed. Please try again');
                            });
                    };

                    self.getRightImageURL = getRightImageURL;  // controller's scope

                    $scope.update = updateList;

                    $scope.delete = function (id) {
                        $http.delete('/albums/delete/' + id)
                            .then(function (response) {
                                alert('deleted');
                                updateList();
                            })
                            .catch(function (err) {
                                console.log(err);
                                alert('failed');
                            });
                    };

                    $scope.addNew = function () {
                        $window.location.href = '#!/songs/add/' + $rootScope.lastId;
                    };

                    updateList();
                    updateCount();
                }
            ]
        });

    function getRightImageURL(url) {
        return typeof url === 'undefined' || url === null || url === '' ? 'img/song_default.png' : url;
    }

})();