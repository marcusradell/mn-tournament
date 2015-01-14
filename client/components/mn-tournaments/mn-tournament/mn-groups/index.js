var fs = require('fs')

var moduleName = 'mnGroups'
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

var dependencies = [require('../mn-pool/index').name]

module.exports = angular.module(moduleName, dependencies)
  .controller(controllerName, require('./controller'))
  .factory(moduleName + 'Repository', require('./repository'))
  .directive(moduleName, directiveFn)
