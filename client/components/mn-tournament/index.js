var fs = require('fs')

var moduleName = 'mnTournament'
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

var dependencies = [require('./mn-tier').name]

module.exports = module.exports = angular.module(moduleName, dependencies)
  .controller(controller.name, controller.fn)
  .directive(moduleName, directiveFn)
