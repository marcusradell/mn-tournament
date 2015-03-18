var angular = require("angular");
var fs = require("fs");

var moduleName = "expPanel";
var moduleDependencies = [
];

var template = fs.readFileSync(__dirname + "/view.html", "utf8");

var directiveFn = function () {
  return {
    controller: require("./controller"),
    controllerAs: "vm",
    bindToController: true,
    template: template,
    transclude: true,
    scope: {
      title: "@"
    }
  };
};

module.exports = angular.module(moduleName, moduleDependencies)
  .directive(moduleName, directiveFn);
