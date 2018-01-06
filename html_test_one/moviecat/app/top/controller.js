(function(angular){
    "use strict";
 //   创建正在热映模块
 var movieCat = angular.module("movieCat.top",["ngRoute"]);

    movieCat.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix();
    }]);
    //配置模块的路由
    movieCat.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/top",{
                templateUrl : "top/view.html",
                controller  : "TopController"
            })
        }]);
    movieCat.controller("TopController",[
        "$scope",
        function($scope){

    }]);
})(angular);