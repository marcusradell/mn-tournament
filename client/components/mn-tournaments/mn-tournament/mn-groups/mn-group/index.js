var fs = require('fs')

var moduleName = 'mnGroup'
var controllerName = moduleName + 'Controller'
var template = fs.readFileSync(__dirname + '/template.html')

var directiveFn = function () {
  return {
    controller: controllerName,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {
      mnTournamentId: '=',
      mnGroupId: '='
    }
  }
}

var dependencies = [require('../mn-pool').name]

module.exports = angular.module(moduleName, dependencies)
  .controller(controllerName, require('./controller'))
  .directive(moduleName, directiveFn)
