//This 'controller' code contains the handler which AWS invokes as the main function of the lambda

var package = require("./package.json");
var myNewApi = require("./lib/my_new_api.js");
console.log("loaded" + package.name + ",version " + package.version);
exports.handler = function(event, context) {
  myNewApi.handleRequest(event, context.done)
}
