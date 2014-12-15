var fs = require('fs')

var moduleName = 'mnPool'
var template = fs.readFileSync(__dirname + '/template.html')
var controller = require('./controller')(moduleName)

var directiveFn = function () {
  return {
    controller: controller.name,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {}
  }
}

var dependencies = [require('../mn-player').name]

module.exports = module.exports = angular.module(moduleName, dependencies)
  .controller(controller.name, controller.fn)
  .directive(moduleName, directiveFn)
