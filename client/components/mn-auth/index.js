var fs = require('fs')

var moduleName = 'auth'
var template = fs.readFileSync(__dirname + '/template.html')
var controller = require('./controller')

var directiveFn = function () {
  return {
    restrict: 'AE',
    controller: controller.name,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {}
  }
}

module.exports = angular.module(moduleName, [])
  .controller(controller.name, controller.fn)
  .directive(moduleName, directiveFn)
