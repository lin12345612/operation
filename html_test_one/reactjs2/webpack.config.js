var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry : {
        source :  "./source.js",
        main : "./main.js"
    },
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "[name].js"
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader",
                options : {
                    presets : ["env"],
                    plugins : ["transform-runtime"]
                }
            }
        ]
    }
}