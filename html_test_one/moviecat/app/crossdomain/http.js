(function(window, document, undefined) {
  'use strict';
  var jsonp = function(url, data, callback) {
    var cbFuncName = 'xiao_lin' ;
    // 不推荐
    window[cbFuncName] = callback;
    var querystring = url.indexOf('?') == -1 ? '?' : '&';
    for (var key in data) {
      querystring += key + '=' + data[key] + '&';
    }
    querystring += 'callback=' + cbFuncName;
    var scriptElement = document.createElement('script');
    scriptElement.src = url + querystring;
    document.body.appendChild(scriptElement);
  };
  window.$jsonp = jsonp;
})(window, document);