var webpack = require("webpack");
var path = require("path");
module.exports = {
	context: __dirname,
	entry: "./gui/main.ts",
	resolve: {
	  extensions: ['', '.js', '.ts']
	},
	output: {
		path: path.join(__dirname, "static"),
		publicPath: "static/", // relative path for github pages
		filename: "main.js", // no hash in main.js because index.html is a static page
	},
	module: {
		loaders: [
			{ test: /\.ts$/,   loaders: ["ts"] }
		],
	}
};