var fs = require('fs')

var moduleName = 'mnTournament'
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

var dependencies = [
  require('./mn-tier').name,
  require('./mn-pool').name
]

module.exports = module.exports = angular.module(moduleName, dependencies)
  .factory(moduleName + 'Repository', require('./repository'))
  .factory(moduleName + 'States', require('./states'))
  .controller(controllerName, require('./controller'))
  .directive(moduleName, directiveFn)
