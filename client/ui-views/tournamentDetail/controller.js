var moment = require('moment')

module.exports = function ($stateParams, $firebase, mnTournamentsRepository) {
  var vm = this

  mnTournamentsRepository.tournamentById($stateParams.id).then(function (tournament) {
    vm.tournament = tournament
  })

  var dateTime = function (dateTime) {
    return moment(dateTime).format('dddd Do MMMM YYYY')
  }

  vm.tournament = []
  vm.dateTime = dateTime
  vm.test = 'TEST'
}
