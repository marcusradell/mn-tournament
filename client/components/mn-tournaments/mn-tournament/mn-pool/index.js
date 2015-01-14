var fs = require('fs')

var moduleName = 'mnPool'
var controllerName = moduleName + 'Controller'
var template = fs.readFileSync(__dirname + '/template.html')

var directiveFn = function () {
  return {
    controller: controllerName,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {
      mnTournamentId: '='
    }
  }
}

var dependencies = []

module.exports = module.exports = angular.module(moduleName, dependencies)
  .factory(moduleName + 'Repository', require('./repository'))
  .controller(controllerName, require('./controller'))
  .directive(moduleName, directiveFn)
