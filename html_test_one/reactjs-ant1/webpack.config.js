var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry : {
        target_first: "./src/source-first.js",
        target_button : "./src/source-button.js",
        target_button_1 : "./src/source-button-2.js",
        target_grid_1 : "./src/source-grid-1.js",
        target_Layout_1 : "./src/source-Layout-1.js",
        target_Layout_2 : "./src/source-layout-2.js",
        target_Layout_3 : "./src/source-layout-3.js",
        target_Layout_4 : "./src/source-layout-4.js",
        target_Layout_5 : "./src/source-layout-5.js"
    },
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "[name].js"
    },
    module:{
        loaders:[{
            test : /\.js$/,
            exclude : /node_modules/,
            loader : "babel-loader",
            options:{
                presets :["env","stage-2"],
                plugins : ["transform-runtime"]
                }
            },
            {
                test : /\.css$/,
                loader : "style-loader!css-loader"
            }
    ]
    }
}