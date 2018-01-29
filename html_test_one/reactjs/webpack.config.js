var webpack = require("webpack");
var path = require("path");
module.exports = {
	entry : "./improt.js",
	output :{
		path : path.resolve(_dirname,"dist"),
		filename : "bundle.js"
	},
	module: {
		loaders : [
			{test :/\.js$/,loader : "label-loader"}
		]
	}
}