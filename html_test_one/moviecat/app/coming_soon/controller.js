(function(angular){
    "use strict";
 //   创建正在热映模块
 var movieCat = angular.module("movieCat.coming_soon",["ngRoute"]);

    movieCat.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix();
    }]);
    //配置模块的路由
    movieCat.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/coming_soon",{
                templateUrl : "coming_soon/view.html",
                controller  : "ComingSoonController"
            })
        }]);
    movieCat.controller("ComingSoonController",[
        "$scope",
        function($scope){

    }]);
})(angular);