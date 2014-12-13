require('angular')
require('firebase')
require('angularfire')

angular.module('app', [
  'firebase',
  require('./components/mn-auth').name,
  require('./components/mn-tournament').name
])

