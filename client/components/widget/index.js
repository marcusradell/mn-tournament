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
  require('./mn-tournament').name
]

module.exports = angular.module(moduleName, dependencies)
  .controller(controllerName, require('./controller'))
  .factory(moduleName + 'Repository', require('./repository'))
  .factory(moduleName + 'States', require('./states'))
  .directive(moduleName, directiveFn)
