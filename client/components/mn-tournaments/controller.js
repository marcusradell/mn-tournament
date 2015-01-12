var moment = require('moment')

module.exports = function (mnTournamentRepository, mnAuthenticationRepository) {
  var vm = this

  var createTournament = function (name, startDate, playersPerGroup) {
    mnTournamentRepository.createTournament(name, moment(startDate).valueOf(), playersPerGroup)
  }

  var tournaments = function () {
    return mnTournamentRepository.tournaments()
  }

  var isAuthenticated = function () {
    return mnAuthenticationRepository.isAuthenticated()
  }

  var dateTime = function (startDate) {
    return moment(startDate).format('YYYY-MM-DD hh:mm')
  }

  vm.createTournament = createTournament
  vm.tournaments = tournaments
  vm.isAuthenticated = isAuthenticated
  vm.dateTime = dateTime
}
