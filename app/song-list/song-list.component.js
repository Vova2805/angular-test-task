(function () {
    'use strict';

    // Register `songList` component, along with its associated controller and template
    angular.module('songList')
        .component('songList', {
            templateUrl: 'song-list/song-list.template.html',
            controller: ['$scope', '$http',
                function SongListController($scope, $http) {

                    var self = this;
                    self.songs = [];

                    self.getRightImageURL = getRightImageURL;

                    this.orderProp = 'title';

                    $http.get('/albums/all').then(function (response) {
                        self.songs = $.map(response.data, function (value, index) {
                            return [value];
                        });
                    });
                }
            ]
        });

    function getRightImageURL(url) {
        return typeof url === 'undefined' || url === null || url === '' ? 'img/song_default.png' : url;
    }

})();