var angular = require("angular");
var fs = require("fs");

var moduleName = "expColumnistArticles";
var moduleDependencies = [
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
  .directive(moduleName, directiveFn);
