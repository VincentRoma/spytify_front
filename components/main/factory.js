(function(){
    'use strict';

    var app = angular.module('myApp.factory', ['ngResource',]);

    app.factory("Spotify", function($resource) {
        return $resource("http://localhost:3000/api/",{},{
            get: {method: 'GET', isArray: false},
            list: {method: 'GET', isArray: true},
            get_current: {method: 'GET', url:"http://localhost:3000/spotify/history", isArray: false},
        });
    });
})();
