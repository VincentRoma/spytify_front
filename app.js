(function(){
    'use strict';

    angular.module('myApp', [
        'ui.router',
        'myApp.main',
        'myApp.factory',
        'myApp.directives'
    ]).
    config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: 'components/main/html/template.html',
                controller: 'MainController'
            });
    }]);
})();
