var webpack = require("webpack");
var path = require("path");

var provider = new webpack.ProvidePlugin({
  $: "jquery"
});

module.exports = {
	context: __dirname,
	entry: "./gui/main.ts",
	resolveLoader: {
		alias: {
			"handlebars-loader": path.join(__dirname, "./webpack/handlebars-loader")
		}
	},
	plugins: [
		provider
	],
	resolve: {
	  extensions: ['', '.js', '.ts'],
	  alias: {
	  	'handlebars': 'handlebars/runtime.js',
	  }
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