var assert = require("chai").assert;var my NewApi =
require("../lib/my_new_api.js");
describe("myNewApi", function () { it("exports handleRequest", function (){
  assert.typeOf(myNewApi.handleRequest, "function");});});
