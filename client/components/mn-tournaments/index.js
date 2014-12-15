var fs = require('fs')

var moduleName = 'mnTournaments'
var template = fs.readFileSync(__dirname + '/template.html')
var controller = require('./controller')(moduleName)
var repository = require('./repository')(moduleName)

var directiveFn = function () {
  return {
    controller: controller.name,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {}
  }
}

var dependencies = [require('../mn-firebase').name]

module.exports = module.exports = angular.module(moduleName, dependencies)
  .controller(controller.name, controller.fn)
  .directive(moduleName, directiveFn)
  .factory(repository.name, repository.fn)
