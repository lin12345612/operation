var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry : {
        target_Affix : "./src/source-Affix.js",
        target_Breadcrumb : "./src/source-Breadcrumb.js",
        target_router:"./src/source-router.js",
        target_Breadcrumb_1 : "./src/source-breadcrumb-1.js"
        },
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "[name].js"
    },
    devServer:{
        historyApiFallback :{
            index : "./index-router.html",
            rewrites:[
                {from :/^\/admin/,to : "dist/admin.html"}
            ]
        }
    },
    module: {
        loaders :[
            {
                test : /\.js$/,
                exclude :/node_modules/,
                loader : "babel-loader",
                options : {
                    presets :["env"],
                    plugins : ["transform-runtime"]
                }
            },
            {
                test : /\.css$/,
                loader :"style-loader!css-loader"
            }
        ]
    }
}