(function(angular){
    'use strict';
// Declare app level module which depends on views, and components
  var movieCat = angular.module('moviecat', [
        'ngRoute',
        'movieCat.in_theaters',
        'movieCat.coming_soon',
        'movieCat.top'
    ]);
    movieCat.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix();
    }]);
    movieCat.config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters' });
    }]);
})(angular);