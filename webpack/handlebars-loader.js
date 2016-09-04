Handlebars = require("handlebars");

module.exports = function(source) {
	return "module.exports = " + Handlebars.precompile(source) + ";";
}