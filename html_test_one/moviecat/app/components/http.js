'use strict';

(function(angular) {
    var http = angular.module("moviecat.services.http",[]);
    http.service("HttpService",[
        "$window",
        "$document",
        function($window,$document){
            this.jsonp = function(url, data, callback) {
                var cbFuncName = 'xiao_lin' ;
                // 不推荐
                $window[cbFuncName] = callback;
                var querystring = url.indexOf('?') == -1 ? '?' : '&';
                for (var k in data) {
                    querystring += key + '=' + data[k] + '&';
                }
                querystring += 'callback=' + cbFuncName;
                var scriptElement = $document[0].createElement('script');
                scriptElement.src = url + querystring;
                $document[0].body.appendChild(scriptElement);
            };
        }
    ]);
})(angular);
