var fs = require('fs')

var moduleName = 'mnTournaments'
var template = fs.readFileSync(__dirname + '/template.html')
var controllerName = moduleName + 'Controller'

var directiveFn = function () {
  return {
    controller: controllerName,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {}
  }
}

var dependencies = [
  require('../mn-firebase').name,
  require('../mn-authentication').name
]

module.exports = module.exports = angular.module(moduleName, dependencies)
  .controller(controllerName, require('./controller'))
  .directive(moduleName, directiveFn)
  .factory(moduleName + 'Repository', require('./repository'))
