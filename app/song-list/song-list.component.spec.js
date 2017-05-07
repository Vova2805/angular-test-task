'use strict';

describe('songList', function () {

    beforeEach(module('songList'));

    describe('SongListController', function () {
        var $httpBackend, ctrl;

        var resp = [
            {
                "title": "Empire Burlesque",
                "artist": "Bob Dylan",
                "country": "USA",
                "company": "Columbia",
                "price": 10.9,
                "year": 1985,
                "id": 0
            },
            {
                "title": "Hide your heart",
                "artist": "Bonnie Tyler",
                "country": "UK",
                "company": "CBS Records",
                "price": 9.9,
                "year": 1988,
                "id": 1
            },
            {
                "title": "Greatest Hits",
                "artist": "Dolly Parton",
                "country": "USA",
                "company": "RCA",
                "price": 9.9,
                "year": 1982,
                "id": 2
            }
        ];

        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('albums/all')
                .respond(
                    resp
                );
            ctrl = $componentController('songs');
        }));

        it('should create a `songs` property with 3 songs fetched with `$http`', function () {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.songs).toEqual([]);

            expect(ctrl.countAll).toBe(0);
            expect(ctrl.initCount).toBe(0);

            $httpBackend.flush();
            expect(ctrl.songs).toEqual(resp);
        });

    });

});
