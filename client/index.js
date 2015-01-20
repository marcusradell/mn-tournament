require('angular')
require('angular-ui-router')

angular.module('app', [
  'ui.router'
])
  .config(require('./config'))
