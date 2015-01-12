var moment = require('moment')

module.exports = function ($stateParams) {
  var vm = this

  vm.tournamentId = $stateParams.id
}
