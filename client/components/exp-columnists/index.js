var angular = require("angular");
var fs = require("fs");

var moduleName = "expColumnists";
var moduleDependencies = [
  require("../exp-panel").name,
  require("../exp-columnist-follow").name
];

var template = fs.readFileSync(__dirname + "/view.html", "utf8");

var directiveFn = function () {
  return {
    controller: require("./controller"),
    controllerAs: "vm",
    bindToController: true,
    template: template,
    scope: {}
  };
};

module.exports = angular.module(moduleName, moduleDependencies)
  .directive(moduleName, directiveFn)
  .factory(moduleName + "Repository", require("./repository"));
