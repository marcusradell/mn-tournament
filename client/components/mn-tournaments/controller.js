var moment = require('moment')

module.exports = function (mnTournamentsRepository, mnAuthenticationRepository) {
  var vm = this

  var createTournament = function (name, startDate) {
    mnTournamentsRepository.createTournament(name, moment(startDate).valueOf())
  }

  var tournaments = function () {
    return mnTournamentsRepository.tournaments()
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
