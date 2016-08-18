(function () {
    'use strict';
    angular.module('app').config(route);
    route.$inject = ['$routeProvider'];

    function route($routeProvider) {
        $routeProvider
            .when("/drivers", {
                templateUrl: "partials/drivers.html",
                controller: "driversController"
            })
            .when("/drivers/:id", {
                templateUrl: "partials/driver.html",
                controller: "driverController"
            })
            .otherwise({redirectTo: '/drivers'});
    }

})();
