'use strict';

describe('songDetail', function () {

    beforeEach(module('songDetail'));

    describe('SongDetailController', function () {
        var $httpBackend, ctrl;
        var resp = {
            "title": "Empire Burlesque",
            "artist": "Bob Dylan",
            "country": "USA",
            "company": "Columbia",
            "price": 10.9,
            "year": 1985,
            "id": 0
        };

        beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('albums/get/0').respond(resp);

            $routeParams.operation = 'update';
            $routeParams.songId = 0;

            ctrl = $componentController('songDetail');
        }));

        it('should fetch the song details', function () {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.song).toEqual({});

            $httpBackend.flush();
            expect(ctrl.song).toEqual(song);
        });
    });
});