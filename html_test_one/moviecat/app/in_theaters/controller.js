(function(angular){
    "use strict";
    //创建正在热映模块
 var movieCat = angular.module("movieCat.in_theaters",        //依赖ngRoute和moviecat.services.http两个服务器
     [
         "ngRoute",
        "moviecat.services.http"
     ]);
    movieCat.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix();
    }]);
    //配置模块的路由
    movieCat.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/in_theaters/:page",{
                templateUrl : "in_theaters/view.html",
                controller  : "InTheatersController"
            })
        }]);
    movieCat.controller("InTheatersController",[
        "$scope",
        "$routeParams",
        "HttpService",
        function($scope,$routeParams,HttpService){
    //     1、设置暴露的数据 2、设置暴露的行为
    //
            var count = 10;
            var page = parseInt($routeParams.page);
            var start = (page - 1) * count ;
            $scope.totalPage = 0 ;
            $scope.total = 0 ;
            $scope.subjects = [] ;
            HttpService.jsonp("http://api.douban.com/v2/movie/in_theaters",
                {
                    start : start,
                    count : count
                },
                function(data){
                    $scope.subjects = data.subjects;
                    $scope.total = data.total ;
                    $scope.totalPage = Math.ceil($scope.total / count) ;
                    $scope.$apply("subjects");
            });

    }]);
})(angular);
//        var doubanApi = "http://api.douban.com/v2/movie/in_theaters" ;
////        测试http服务
//        $http.jsonp(doubanApi+"?callback = JSON_CALLBACK").then(function(data){
//            $scope.subjects = data.data.subjects ;
//            console.log(data.data);
//        }, function(err){
//            console.log("数据出错");
//        });