var fs = require('fs')

var moduleName = 'mnPlayer'
var template = fs.readFileSync(__dirname + '/template.html')
var controller = require('./controller')(moduleName)
var playersService = require('./mn-players-service')

var directiveFn = function () {
  return {
    controller: controller.name,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {
      mnModel: '='
    }
  }
}

module.exports = angular.module(moduleName, [])
  .controller(controller.name, controller.fn)
  .directive(moduleName, directiveFn)
  .factory(playersService.name, playersService.fn)
