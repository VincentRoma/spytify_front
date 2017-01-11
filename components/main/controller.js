(function(){
    'use strict';

    var app = angular.module('myApp.main', []);

    app.controller('MainController', function($scope, Spotify) {
        Spotify.get_current().$promise.then(function(data){
            $scope.history = data.recenttracks;
        });
    });
})();
