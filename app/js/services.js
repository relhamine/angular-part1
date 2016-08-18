(function () {
    'use strict';

    angular.module('app')
        .factory('ergastAPIservice', function ($http) {

            var ergastAPI = {};

            ergastAPI.getDrivers = function () {
                return $http({
                    method: 'JSONP',
                    url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
                });

                return
            }

            ergastAPI.getDriverDetails = function (id) {
                /*return $http({
                 method: 'JSONP',
                 url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/driverStandings.json?callback=JSON_CALLBACK'
                 });*/

                var driver = ergastAPI.getAll().StandingsLists[0].DriverStandings.filter(function (item) {
                    return item.Driver.driverId == id
                });
                return driver[0];
            }

            ergastAPI.getAll = function () {
                return {
                    "StandingsLists": [
                        {
                            "season": "2013",
                            "round": "19",
                            "DriverStandings": [
                                {
                                    "position": "1",
                                    "positionText": "1",
                                    "points": "397",
                                    "wins": "13",
                                    "Driver": {
                                        "driverId": "vettel",
                                        "permanentNumber": "5",
                                        "code": "VET",
                                        "url": "http:\/\/en.wikipedia.org\/wiki\/Sebastian_Vettel",
                                        "givenName": "Sebastian",
                                        "familyName": "Vettel",
                                        "dateOfBirth": "1987-07-03",
                                        "nationality": "German"
                                    },
                                    "Constructors": [
                                        {
                                            "constructorId": "red_bull",
                                            "url": "http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing",
                                            "name": "Red Bull",
                                            "nationality": "Austrian"
                                        }
                                    ]
                                },
                                {
                                    "position": "2",
                                    "positionText": "2",
                                    "points": "242",
                                    "wins": "2",
                                    "Driver": {
                                        "driverId": "alonso",
                                        "permanentNumber": "14",
                                        "code": "ALO",
                                        "url": "http:\/\/en.wikipedia.org\/wiki\/Fernando_Alonso",
                                        "givenName": "Fernando",
                                        "familyName": "Alonso",
                                        "dateOfBirth": "1981-07-29",
                                        "nationality": "Spanish"
                                    },
                                    "Constructors": [
                                        {
                                            "constructorId": "ferrari",
                                            "url": "http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari",
                                            "name": "Ferrari",
                                            "nationality": "Italian"
                                        }
                                    ]
                                },
                                {
                                    "position": "3",
                                    "positionText": "3",
                                    "points": "199",
                                    "wins": "0",
                                    "Driver": {
                                        "driverId": "webber",
                                        "code": "WEB",
                                        "url": "http:\/\/en.wikipedia.org\/wiki\/Mark_Webber",
                                        "givenName": "Mark",
                                        "familyName": "Webber",
                                        "dateOfBirth": "1976-08-27",
                                        "nationality": "Australian"
                                    },
                                    "Constructors": [
                                        {
                                            "constructorId": "red_bull",
                                            "url": "http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing",
                                            "name": "Red Bull",
                                            "nationality": "Austrian"
                                        }
                                    ]
                                },
                                {
                                    "position": "23",
                                    "positionText": "23",
                                    "points": "0",
                                    "wins": "0",
                                    "Driver": {
                                        "driverId": "chilton",
                                        "permanentNumber": "4",
                                        "code": "CHI",
                                        "url": "http:\/\/en.wikipedia.org\/wiki\/Max_Chilton",
                                        "givenName": "Max",
                                        "familyName": "Chilton",
                                        "dateOfBirth": "1991-04-21",
                                        "nationality": "British"
                                    },
                                    "Constructors": [
                                        {
                                            "constructorId": "marussia",
                                            "url": "http:\/\/en.wikipedia.org\/wiki\/Marussia_F1",
                                            "name": "Marussia",
                                            "nationality": "Russian"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                };
            }

            return ergastAPI;
        });


})();