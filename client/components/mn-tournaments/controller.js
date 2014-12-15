var moment = require('moment')

var fn = function (mnTournamentsService) {
  var vm = this

  var createTournament = function (name, startDate) {
    mnTournamentsService.createTournament(name, moment(startDate).valueOf())
  }

  var tournaments = function () {
    return mnTournamentsService.tournaments()
  }

  vm.createTournament = createTournament
  vm.tournaments = tournaments
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}
