require('angular')
require('firebase')
require('angularfire')
require('angular-ui-router')

angular.module('app', [
  'firebase',
  'ui.router',
  require('./components/mn-authentication').name,
  require('./components/mn-tournament').name,
  require('./components/mn-tournaments').name
])
  .config(require('./config'))
