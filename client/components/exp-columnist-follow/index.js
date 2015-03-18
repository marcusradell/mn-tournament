var angular = require("angular");
var fs = require("fs");

var moduleName = "expColumnistFollow";
var moduleDependencies = [
];

var template = fs.readFileSync(__dirname + "/view.html", "utf8");

var directiveFn = function () {
  return {
    controller: require("./controller"),
    controllerAs: "vm",
    bindToController: true,
    template: template,
    scope: {
      columnistId: "="
    }
  };
};

module.exports = angular.module(moduleName, moduleDependencies)
  .directive(moduleName, directiveFn);
