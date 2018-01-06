define(function(require , exports ,module){
    exports.add = function( a,b){
        return parseFloat(a)+parseFloat(b);
    };
    exports.subtract = function( a,b){
        return parseFloat(a)-parseFloat(b);
    };
    exports.multiply = function( a,b){
        return parseFloat(a)*parseFloat(b);
    };
    exports.divide = function( a,b){
        return parseFloat(a)/parseFloat(b);
    };
});
