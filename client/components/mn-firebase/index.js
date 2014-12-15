var fs = require('fs')

var moduleName = 'mnFirebase'

var dependencies = []

module.exports = angular.module(moduleName, dependencies)
  .constant(moduleName + 'Constants', require('./constants'))
