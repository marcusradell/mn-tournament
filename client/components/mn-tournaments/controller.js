var moment = require('moment')

module.exports = function (mnTournamentsRepository, mnAuthenticationRepository) {
  var vm = this

  var createTournament = function (name, startDate, playersPerGroup) {
    mnTournamentsRepository.createTournament(name, moment(startDate).valueOf(), playersPerGroup)
  }

  var isAuthenticated = function () {
    return mnAuthenticationRepository.isAuthenticated()
  }

  var dateTime = function (startDate) {
    return moment(startDate).format('YYYY-MM-DD hh:mm')
  }

  vm.tournaments = null
  vm.createTournament = createTournament
  vm.isAuthenticated = isAuthenticated
  vm.dateTime = dateTime

  ;(function initialize() {
    mnTournamentsRepository.tournaments().then(function (data) {
      vm.tournaments = data
    }, function (data) {
      alert(data)
    })
  }())
}
